import React, { Component } from 'react';
import { Keyboard, AsyncStorage, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { 
    Container, Form, Input, SubmitButton, List, User, 
    Avatar, Login, Bio, ProfileButton, ProfileButtonText,
    Theme, ThemeText
} from './styles';

export default class Home extends Component {
    state = {
        repoName: '',
        users: [],
        isEnabled: false
    };

    async componentDidMount() {
        const users = await AsyncStorage.getItem('users');

        if (users) {
            this.setState({ users: JSON.parse(users) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { users } = this.state;

        if (prevState.users != users) {
            AsyncStorage.setItem('users', JSON.stringify(users));
        }
    }

    handleSubmit = async () => {
        const { repoName, users } = this.state;

        const response = await api.get(`/users/${repoName}`);

        const data = {
            id: response.data.id,
            login: response.data.login,
            avatar: response.data.avatar_url,
            bio: response.data.bio
        };

        this.setState({
            users: [...users, data],
            repoName: ''
        });

        Keyboard.dismiss();
    }

    handleNavigate = (user) => {
        const { navigation } = this.props;
        const { isEnabled } = this.state;

        navigation.navigate('Main', { user, isEnabled });
    }

    handleSwitch = () => {
        const { isEnabled } = this.state;

        this.setState({ isEnabled: !isEnabled });
    }

    render() {
        const { repoName, users, isEnabled } = this.state;

        return (
            <Container isEnabled={isEnabled}>
                <Theme>
                    <Switch 
                        trackColor={{ false: '#ddd', true: "#fff"  }}
                        thumbColor={ isEnabled ? "#534949" : "#E02041" }
                        onValueChange={this.handleSwitch}
                        value={isEnabled}
                    />

                    <ThemeText isEnabled={isEnabled}> Theme </ThemeText>
                </Theme>

                <Form>
                    <Input 
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={repoName}
                        placeholder="Insira um usuário do github"
                        onChangeText={(text) => this.setState({ repoName: text })}
                        returnKey="send"
                        onSubmitEditing={this.handleSubmit}
                    />
    
                    <SubmitButton onPress={this.handleSubmit} isEnabled={isEnabled} >
                        <Icon name="add" size={30} color="#fff" />
                    </SubmitButton>
                </Form>

                <List 
                    data={users}
                    keyExtractor={user => String(user.id)}
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar }} />
                            <Login> {item.login} </Login>
                            <Bio> {item.bio} </Bio>

                            <ProfileButton onPress={() => this.handleNavigate(item)} isEnabled={isEnabled} >
                                <ProfileButtonText>Ver repositórios</ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );

       
    }
}

Home.navigationOptions = {
    title: 'Git API'
};
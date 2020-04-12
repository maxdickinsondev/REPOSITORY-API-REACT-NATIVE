import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Header, Avatar, Name, Bio, List, 
    ReposInfo, RepoName, DetailsButton, DetailsButtonText 
} from './styles';

export default class Main extends Component {
    state = {
        repos: [],
        isEnabled: false
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const isEnabled = navigation.getParam('isEnabled');

        const response = await api.get(`/users/${user.login}/repos`);

        console.log(response.data);

        this.setState({ 
            repos: response.data,
            isEnabled: isEnabled 
        });
    }

    handleWebView = (url) => {
        const { navigation } = this.props;
        
        navigation.navigate('Details', { url })
    } 

    render() {
        const { navigation } = this.props;
        const { repos, isEnabled } = this.state;

        const user = navigation.getParam('user');

        return (
            <Container isEnabled={isEnabled}>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name> {user.login} </Name>
                    <Bio> {user.bio} </Bio>
                </Header>
    
                <List 
                    data={repos}
                    keyExtractor={repo => String(repo.id)}
                    renderItem={({ item }) => (
                        <ReposInfo isEnabled={isEnabled}>
                            <RepoName> {item.name} </RepoName>
    
                            <DetailsButton onPress={() => this.handleWebView(item)} isEnabled={isEnabled} >
                                <DetailsButtonText> Ver detalhes </DetailsButtonText>
                            </DetailsButton>
                        </ReposInfo>
                    )}
                />
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Repositórios'
}
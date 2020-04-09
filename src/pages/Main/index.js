import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Header, Avatar, Name, Bio, List, 
    ReposInfo, RepoName, DetailsButton, DetailsButtonText 
} from './styles';
import Home from '../Home';

export default class Main extends Component {
    state = {
        repos: []
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = await api.get(`/users/${user.login}/repos`);

        console.log(response.data);

        this.setState({ repos: response.data });
    }

    render() {
        const { navigation } = this.props;
        const { repos } = this.state;

        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name> {user.login} </Name>
                    <Bio> {user.bio} </Bio>
                </Header>
    
                <List 
                    data={repos}
                    keyExtractor={repo => String(repo.id)}
                    renderItem={({ item }) => (
                        <ReposInfo>
                            <RepoName> {item.name} </RepoName>
    
                            <DetailsButton onPress={() => {}}>
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
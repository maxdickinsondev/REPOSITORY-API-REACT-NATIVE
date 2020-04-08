import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
    return (
        <Container>
            <Form>
                <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Insira um usuário do github"

                />

                <SubmitButton>
                    <Icon name="plus" size={30} color="#E02041" />
                </SubmitButton>
            </Form>
        </Container>
    );
}

Home.navigationOptions = {
    title: 'Git API'
};
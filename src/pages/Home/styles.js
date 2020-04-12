import styled from 'styled-components';
import { Component } from 'react';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: ${props => props.isEnabled ? props.theme.dark : props.theme.main };
`;

Container.defaultProps = {
    theme: {
        dark: "#282727",
        main: "#fff"
    }
}

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    flex: 1;
    height: 40px;
    border: 1px solid #999;
    background: #eee;
    padding: 0 15px;
    border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background: ${props => props.isEnabled ? props.theme.dark : props.theme.main};
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;

SubmitButton.defaultProps = {
    theme: {
        dark: '#534949',
        main: '#E02041'
    }
}

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    margin-top: 20px;
`;

export const Login = styled.Text`
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
    color: #999;
    font-weight: bold;
`;

export const Bio = styled.Text.attrs({
    numberOfLines: 2
})`
    color: #999;
    font-size: 13px;
    line-height: 18px;
    margin-top: 5px;
    text-align: center;
`;

export const ProfileButton = styled.TouchableOpacity`
    margin-top: 10px;
    height: 36px;
    background: ${props => props.isEnabled ? props.theme.dark : props.theme.main };
    align-self: stretch;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

ProfileButton.defaultProps = {
    theme: {
        dark: '#534949',
        main: '#E02041'
    }
}

export const ProfileButtonText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
`;

export const Theme = styled.View`
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const ThemeText = styled.Text`
    color: ${props => props.isEnabled ? props.theme.dark : props.theme.main };
`;

ThemeText.defaultProps = {
    theme: {
        dark: '#fff',
        main: '#000'
    }
}
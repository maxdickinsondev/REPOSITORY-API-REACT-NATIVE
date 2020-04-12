import styled from 'styled-components';

export const Container = styled.View`
    background: ${props => props.isEnabled ? props.theme.dark : props.theme.main};
`;

Container.defaultProps = {
    theme: {
        dark: '#272828',
        main: '#fff'
    }
}

export const Header = styled.View`
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 64px;
    margin-top: 20px;
`;

export const Name = styled.Text`
    margin-top: 4px;
    font-size: 15px;
    color: #999;
    font-weight: bold;
`;

export const Bio = styled.Text`
    color: #999;
    margin: 0 20px 30px;
    text-align: center;
    line-height: 18px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})`
    margin: 0 0 50px;
`;

export const ReposInfo = styled.View`
    margin-top: 7px;
    background: #ccc;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;
    margin: 0 20px 30px;
    padding: 10px;
`;

export const RepoName = styled.Text.attrs({
    numbersOfLine: 2
})`
    flex: 1;
    font-size: 14px;
`;

export const DetailsButton = styled.TouchableOpacity`
    background: ${props => props.isEnabled ? props.theme.dark : props.theme.main};
    height: 25px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;

DetailsButton.defaultProps = {
    theme: {
        dark: '#534949',
        main: '#E02041'
    }
}

export const DetailsButtonText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
    font-size: 12px;
`;



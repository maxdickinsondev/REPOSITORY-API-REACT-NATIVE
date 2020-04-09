import styled from 'styled-components';

export const Container = styled.View`
    margin-top: 20px;
`;

export const Header = styled.View`
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 64px;
`;

export const Name = styled.Text`
    margin-top: 4px;
    font-size: 15px;
    color: #000;
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
    
`;

export const ReposInfo = styled.View`
    margin-top: 7px;
    background: #eee;
    flex-direction: row;
    justify-content: space-between;
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
    background: #E02041;
    height: 25px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;

export const DetailsButtonText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
    font-size: 12px;
`;



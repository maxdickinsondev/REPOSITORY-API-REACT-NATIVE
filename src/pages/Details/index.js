import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class Details extends Component {
    render() {
        const { navigation } = this.props;
        const url = navigation.getParam('url').html_url;

        return (
            <WebView
                source={{ uri: url }}
            />
        );
    }
}

Details.navigationOptions = {
    title: 'Detalhes'
}
import React, { Component } from'react';
import { AppRegistry, Text } from 'react-native';

class TODOApp extends Component {
    render() {
        return(
            <Text>Hello World</Text>
        );
    }
}

AppRegistry.registerComponent('TODOApp', () => TODOApp);

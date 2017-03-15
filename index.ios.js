import React, { Component } from'react'
import { AppRegistry, Text, View } from 'react-native'

class Blink extends Component {
    constructor(props) {
        super(props)
        this.state = {showText: true}

        setInterval(() => {
            console.log("unko")
            this.setState({showText: !this.state.showText})
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' '
        return (
            <Text>{display}</Text>
        )
    }
}

class TODOApp extends Component {
    render() {
        return(
            <View style={{alignItems: 'center'}}>
                <Blink text='waiwai' />
                <Blink text='wuiwui' />
                <Blink text='weiwei' />
            </View>
        )
    }
}

AppRegistry.registerComponent('TODOApp', () => TODOApp)

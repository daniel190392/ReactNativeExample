import React, { Component } from 'react'
import { Text , View , TextInput , StyleSheet } from 'react-native'
import Buttons from './Buttons'

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props),
        this.state = {text : ''}
    }
    render () {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type here to save'
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={styles.text}>
                    {this.state.text.split('').map((word) => word && '🍕').join('')}
                </Text>
                <Buttons/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 30,
        height : 40,
        marginLeft : 20,
        marginRight : 20
    },
    text: {
      padding : 10,
      fontSize: 42,
    },
  })
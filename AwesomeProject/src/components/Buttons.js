import React, { Component } from 'react'
import { Alert , Button , View , StyleSheet } from 'react-native'

export default class Buttons extends Component {

    _onPressButtonSave(){
        Alert.alert('You tapped the button of Save!')
    }

    _onPressButtonDelete(){
        Alert.alert('You tapped the button of Delete!')
    }

    render(){
        return(
            <View style={styles.alternativeLayoutButtonContainer}>
                <Button title='Save' onPress={this._onPressButtonSave}/>
                <Button title='Delete' onPress={this._onPressButtonDelete}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  })
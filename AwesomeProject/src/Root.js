import React, { Component } from 'react';
import { View } from 'react-native'
import PizzaTranslator from './components/PizzaTranslator'
import Home from './components/Home'
import Scroll from './components/Scroll'

export default class Root extends Component {
    render() {
        return ( 
            <View style={{flex:1}}>
                <View style={{height: 20, backgroundColor : 'green'}} />
                <View style={{flex:1}}>
                    
                    <Scroll/>
                    
                </View>
            </View>
        )
    }
}
//<Home />
//<PizzaTranslator />
import React, { Component } from 'react'
import { ScrollView, Image, Text } from 'react-native'


export default class ExampleOfScrollView extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Image source={require('../assets/descarga.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        )
    }
}
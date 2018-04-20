import React, { Component } from 'react'
import { Text , View , StyleSheet } from 'react-native'
// import { AppRegistry, Image} from 'react-native'

// export default class Banana extends Component {
//     render () {
//         let pic = { url : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }
//         return (
//             <Image source={pic} style={{width:193, height:110}} />
//         )
//     }
// }

const styles = StyleSheet.create({
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    distribution : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems : 'center',
    },
  })

class Greting extends Component {
  render() {
    return (
      <Text>Hello {this.props.nombre}</Text>
    )
  }
}

class Blick extends Component {
    constructor(props) {
        super(props)
        this.state = {isShowwingText: true}

        setInterval(() => {
            this.setState(lastState => {
                return {isShowwingText: !lastState.isShowwingText}
            })
        },1000)
    }

    render(){
        const { nombre, red, blue } = this.props
        let display = this.state.isShowwingText ? nombre : ''
        return (
            <Text style={red ? styles.red : blue ? styles.bigblue : null}> {display}</Text>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render () {
        return (
            <View style={styles.distribution}>
                <Blick nombre='Daniel' blue/>
                <Blick nombre='Rafael'/>
                <Blick nombre='Maycol' red/>
                <Blick nombre='Miguel'/>
            </View>
        )
    }
}

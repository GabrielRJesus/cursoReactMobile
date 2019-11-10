import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Simples from './components/Simples'
import Parimpar from './components/Parimpar'

export default class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <Simples texto="Flexivel!!"/>
        <Parimpar numero={5} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})
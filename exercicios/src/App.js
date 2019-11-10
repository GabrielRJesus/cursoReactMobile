import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Simples from './components/Simples'

export default class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <Simples texto="Flexivel!!"/>
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
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'

const ChangeThemeScreen = () => {
  return (
    <View>
      <HeaderTitle title='Theme' />

      <TouchableOpacity style={{justifyContent: "center", backgroundColor: "blue", alignItems: "center", width: 150, height: 50}}>

        <Text style={{fontSize: 16}}></Text>

      </TouchableOpacity>
    </View>
  )
}

export default ChangeThemeScreen

const styles = StyleSheet.create({})
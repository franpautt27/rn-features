import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { globalStyles } from '../theme/appTheme'

const AlertScreen = () => {

    function showAlert(){
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
    }
  return (
    <View style={globalStyles.globalMargin} >
      <HeaderTitle title='Alerts' />
      <Button title='mostrar Alerta' onPress={showAlert} />
    </View>
  )
}

export default AlertScreen

const styles = StyleSheet.create({})
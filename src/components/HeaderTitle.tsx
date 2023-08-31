import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native'

interface Props {
    title: string
}
const HeaderTitle = (props: Props) => {
    const {title} = props
    const {top} = useSafeAreaInsets()
    const {colors} = useTheme()
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{...globalStyles.title, color: colors.text}}>{title}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({})
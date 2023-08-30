import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
    title: string
}
const HeaderTitle = (props: Props) => {
    const {title} = props
    const {top} = useSafeAreaInsets()
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={globalStyles.title}>{title}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({})
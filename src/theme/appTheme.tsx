import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const globalStyles = StyleSheet.create({
    title : {
        fontSize: 35,
        fontWeight: "bold"
    },
    globalMargin: {
        marginHorizontal: 20
    },
    fullScreen : {
        flex: 1,
    }
    ,
    fullScreenCentered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})
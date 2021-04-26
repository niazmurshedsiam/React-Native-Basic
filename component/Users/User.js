import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User(props) {
    return (
        <View style={styles.container}>
            <Text>User Name : {props.user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'yellow',
        margin:5,
        padding: 5,
        borderRadius15
    }
})

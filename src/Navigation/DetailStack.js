import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailScreeen from '../Screens/DetailScreen/DetailScreeen'
const Stack = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DetailStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>

            <Stack.Screen name="Detail" component={DetailScreeen} />

        </Stack.Navigator>
    )
}

export default DetailStack

const styles = StyleSheet.create({})
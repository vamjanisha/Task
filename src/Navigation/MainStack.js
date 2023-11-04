import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import TabStack from './TabStack';
import DetailScreeen from '../Screens/DetailScreen/DetailScreeen';
import DetailStack from './DetailStack';

export const Auth = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    )
}


export const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="TabStack" component={TabStack} />
            <Stack.Screen name="DetailStack" component={DetailStack} />
        </Stack.Navigator>
    )
}



const styles = StyleSheet.create({})
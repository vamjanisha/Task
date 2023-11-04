import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import HomeActive from '../assets/svgs/HomeActive';
import DetailStack from './DetailStack';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';


import Home from '../assets/svgs/Home';
import ActiveTicket from '../assets/svgs/ActiveTicket';
import Ticket from '../assets/svgs/Ticket';
import FavouriteScreen from '../Screens/FavouriteScreen/FavouriteScreen';
import ActiveHeart from '../assets/svgs/ActiveHeart';
import Heart from '../assets/svgs/Heart';
import ProfileActive from '../assets/svgs/ProfileActive';
import TicketScreen from '../Screens/TicketScreen/TicketScreen';
import Profile from '../assets/svgs/Profile';

const Tab = createBottomTabNavigator();
const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#FFFFFF', height: 72, borderTopRightRadius: 32, borderTopLeftRadius: 32, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                    paddingHorizontal:50
                },
                // tabBarHideOnKeyboard: true,
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused ? <HomeActive /> : <Home />),
                    tabBarShowLabel: false
                }}
            />

            <Tab.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused ? <ActiveTicket /> : <Ticket />),
                    tabBarShowLabel: false
                }}
            />

            <Tab.Screen
                name="favourite"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused ? <ActiveHeart /> : <Heart />),
                    tabBarShowLabel: false
                }}
            />


            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (focused ? <ProfileActive /> : <Profile />),
                    tabBarShowLabel: false
                }}
            />

        </Tab.Navigator>
    )
}

export default TabStack

const styles = StyleSheet.create({})
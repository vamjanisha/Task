import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    ClipPath,
    Defs,
    G,
    LinearGradient,
    Path,
    Rect,
    Stop,
    Svg,
    Mask,
} from 'react-native-svg';
const ActiveTicket = () => {
    return (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M11.8867 4.1886V6.00322" stroke="#176FF2" stroke-width="1.34971" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11.8867 14.3186V15.8363" stroke="#176FF2" stroke-width="1.34971" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M11.8867 11.7412V8.12622" stroke="#176FF2" stroke-width="1.34971" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.5272 15.9986C16.8935 15.9986 18.0001 14.9057 18.0001 13.5564V11.6125C17.0961 11.6125 16.368 10.8934 16.368 10.0006C16.368 9.10778 17.0961 8.38796 18.0001 8.38796L17.9993 6.44322C17.9993 5.09395 16.8919 4.0011 15.5265 4.0011H5.47696C4.11148 4.0011 3.00408 5.09395 3.00408 6.44322L3.0033 8.4513C3.90736 8.4513 4.63546 9.10778 4.63546 10.0006C4.63546 10.8934 3.90736 11.6125 3.0033 11.6125V13.5564C3.0033 14.9057 4.10992 15.9986 5.47618 15.9986H15.5272Z" stroke="#B8B8B8" stroke-width="1.34971" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}

export default ActiveTicket

const styles = StyleSheet.create({})
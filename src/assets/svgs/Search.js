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
const Search = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Mask id="mask0_0_91" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="17" height="17">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.66667 1.66666H17.8973V17.8975H1.66667V1.66666Z" fill="white"/>
    </Mask>
    <G mask="url(#mask0_0_91)">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.78234 2.91666C5.9965 2.91666 2.9165 5.99582 2.9165 9.78166C2.9165 13.5675 5.9965 16.6475 9.78234 16.6475C13.5673 16.6475 16.6473 13.5675 16.6473 9.78166C16.6473 5.99582 13.5673 2.91666 9.78234 2.91666ZM9.78234 17.8975C5.30734 17.8975 1.6665 14.2567 1.6665 9.78166C1.6665 5.30666 5.30734 1.66666 9.78234 1.66666C14.2573 1.66666 17.8973 5.30666 17.8973 9.78166C17.8973 14.2567 14.2573 17.8975 9.78234 17.8975Z" fill="#B8B8B8"/>
    </G>
    <Mask id="mask1_0_91" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="14" width="5" height="5">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.3666 14.7558H18.5533V18.9347H14.3666V14.7558Z" fill="white"/>
    </Mask>
    <G mask="url(#mask1_0_91)">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.9285 18.9347C17.7693 18.9347 17.6093 18.8739 17.4868 18.7522L14.5502 15.8239C14.306 15.5797 14.3052 15.1839 14.5493 14.9397C14.7927 14.6939 15.1885 14.6956 15.4335 14.9381L18.3702 17.8672C18.6143 18.1114 18.6152 18.5064 18.371 18.7506C18.2493 18.8739 18.0885 18.9347 17.9285 18.9347Z" fill="#B8B8B8"/>
    </G>
    </Svg>
    
  )
}

export default Search

const styles = StyleSheet.create({})
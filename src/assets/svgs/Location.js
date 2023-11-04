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
    Circle,
} from 'react-native-svg';

const Location = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M8 14C10.9455 12.6667 13.3333 10.2789 13.3333 7.33333C13.3333 4.38781 10.9455 2 8 2C5.05448 2 2.66667 4.38781 2.66667 7.33333C2.66667 10.2789 5.05448 12.6667 8 14ZM8 9.33333C9.10457 9.33333 10 8.4379 10 7.33333C10 6.22876 9.10457 5.33333 8 5.33333C6.89543 5.33333 6 6.22876 6 7.33333C6 8.4379 6.89543 9.33333 8 9.33333Z" fill="url(#paint0_linear_0_78)"/>
    <Path d="M13.3333 7.33333C13.3333 10.2789 10.9455 12.6667 8 14C5.05448 12.6667 2.66667 10.2789 2.66667 7.33333C2.66667 4.38781 5.05448 2 8 2C10.9455 2 13.3333 4.38781 13.3333 7.33333Z" fill="url(#paint1_linear_0_78)"/>
    <Path d="M10 7.33333C10 8.4379 9.10457 9.33333 8 9.33333C6.89543 9.33333 6 8.4379 6 7.33333C6 6.22876 6.89543 5.33333 8 5.33333C9.10457 5.33333 10 6.22876 10 7.33333Z" fill="url(#paint2_linear_0_78)"/>
    <Circle cx="8" cy="8" r="2" fill="white"/>
    <Defs>
    <LinearGradient id="paint0_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#176FF2"/>
    <Stop offset="1" stopColor="#196EEE"/>
    </LinearGradient>
    <LinearGradient id="paint1_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#176FF2"/>
    <Stop offset="1" stopColor="#196EEE"/>
    </LinearGradient>
    <LinearGradient id="paint2_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
    <Stop stopColor="#176FF2"/>
    <Stop offset="1" stopColor="#196EEE"/>
    </LinearGradient>
    </Defs>
    </Svg>
    
  )
}

export default Location

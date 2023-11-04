import React from 'react';
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

const HomeActive = () => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G id="Iconly/Curved/Home">
                <G id="Home">
                    <Path id="Stroke 2" fill-rule="evenodd" clip-rule="evenodd" d="M2.9 13.713C2.9 8.082 3.514 8.475 6.819 5.41C8.265 4.246 10.515 2 12.458 2C14.4 2 16.695 4.235 18.154 5.41C21.459 8.475 22.072 8.082 22.072 13.713C22.072 22 20.113 22 12.486 22C4.859 22 2.9 22 2.9 13.713Z" fill="url(#paint0_linear_0_154)" />
                    <Path id="Stroke 1" d="M9.57969 16.1348H15.3947" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </G>
            </G>
            <Defs>
                <LinearGradient id="paint0_linear_0_154" x1="21.8254" y1="16.4231" x2="2.19098" y2="16.1695" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#176FF2" />
                    <Stop offset="1" stopColor="#196EEE" />
                </LinearGradient>
            </Defs>
        </Svg>

    );
};

export default HomeActive;

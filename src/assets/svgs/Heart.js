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
const Heart = () => {
    return (
        <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask id="mask0_0_165" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3.7674H17.8964V17.4806H3.5V3.7674Z" fill="white"/>
        </Mask>
        <G mask="url(#mask0_0_165)">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.7839 10.1815C5.76979 13.2488 9.66484 15.729 10.7 16.3429C11.7386 15.7227 15.6618 13.2151 16.616 10.1843C17.2426 8.22515 16.661 5.74354 14.3503 4.99884C13.2308 4.63951 11.9249 4.8582 11.0234 5.55578C10.835 5.70064 10.5734 5.70346 10.3835 5.56C9.42857 4.84203 8.18108 4.63177 7.044 4.99884C4.73679 5.74284 4.15734 8.22444 4.7839 10.1815ZM10.6994 17.48C10.6122 17.48 10.5257 17.4589 10.4469 17.416C10.2268 17.2957 5.0421 14.4379 3.77844 10.5042C3.77774 10.5042 3.77774 10.5035 3.77774 10.5035C2.98452 8.02679 3.86775 4.91441 6.71924 3.99532C8.05814 3.56214 9.51729 3.75271 10.6973 4.49741C11.8407 3.77451 13.3596 3.5748 14.6718 3.99532C17.5261 4.91581 18.4121 8.02749 17.6196 10.5035C16.3967 14.3922 11.174 17.2929 10.9525 17.4146C10.8738 17.4582 10.7866 17.48 10.6994 17.48Z" fill="#B8B8B8"/>
        </G>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.8584 9.12954C14.5862 9.12954 14.3556 8.92069 14.3331 8.64503C14.2867 8.067 13.8999 7.57898 13.3493 7.40106C13.0715 7.31105 12.9197 7.0136 13.009 6.73724C13.0997 6.46018 13.3943 6.30969 13.6728 6.39689C14.6313 6.707 15.3028 7.55577 15.3851 8.55924C15.4083 8.84967 15.1924 9.10423 14.902 9.12743C14.8872 9.12884 14.8732 9.12954 14.8584 9.12954Z" fill="#B8B8B8"/>
        </Svg>
        
    )
}

export default Heart

import {View, Text} from 'react-native';
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
  Filter,
} from 'react-native-svg';

const Star = () => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8.00348 11.3331L4.00348 13.3331L5.00348 9.3331L2.00348 5.99976L6.33681 5.66643L8.00348 1.99976L9.67015 5.66643L14.0035 5.99976L11.0035 9.3331L12.0035 13.3331L8.00348 11.3331Z"
        fill="#D8D138"
      />
      <Path
        d="M8.00348 11.3331L4.00348 13.3331L5.00348 9.3331L2.00348 5.99976L6.33681 5.66643L8.00348 1.99976L9.67015 5.66643L14.0035 5.99976L11.0035 9.3331L12.0035 13.3331L8.00348 11.3331Z"
        fill="url(#paint0_linear_0_36)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_0_36"
          x1="13.7358"
          y1="9.85583"
          x2="2.46643"
          y2="9.61676"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DF9652" />
          <Stop offset="1" stopColor="#B47820" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Star;

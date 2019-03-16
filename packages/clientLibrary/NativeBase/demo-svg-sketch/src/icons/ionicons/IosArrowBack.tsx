
import * as React from 'react';

import { View, Text, StyleSheet } from 'react-sketchapp'
import { Svg, render } from 'react-sketchapp';
// import SvgUri from 'react-native-svg-uri';

// export const IosArrowBackyyy = (props) => {
//   return (
//     <SvgUri
//       width="200"
//       height="200"
//       source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
//     />
//   );
// }

export const IosArrowBack = (props) => {
  // const size = 512
  const size = 280
  return (
    <View style={styles.container}>
      <Svg
        preserveAspectRatio="xMidYMid meet"
        height={size} width={280 * 57 / 100} viewBox="0 0 512 512">
        <Svg.Path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
      </Svg>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
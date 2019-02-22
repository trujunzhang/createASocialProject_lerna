const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript((config) => {
  // Alias all `react-native` imports to `react-native-web`
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    'react-native$': 'react-native-web'
  }

  return config
})


// module.exports = {
//   webpack: config => {
//     // Alias all `react-native` imports to `react-native-web`
//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//       'react-native$': 'react-native-web'
//     }

//     return config
//   }
// }

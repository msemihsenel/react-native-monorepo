/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
  projectRoot: path.resolve(__dirname, '../../'),
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};


// //FOR ui-kitten

// const MetroConfig = require('@ui-kitten/metro-config');

// const evaConfig = {
//   evaPackage: '@eva-design/eva',
//   customMappingPath: './mapping.json',
// };

// const path = require('path');

// module.exports = MetroConfig.create(evaConfig, {
//   // Whatever was previously specified
//   projectRoot: path.resolve(__dirname, '../../'),
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// });

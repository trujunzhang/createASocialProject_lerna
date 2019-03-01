const fs = require('fs')
const path = require('path')
const getDevPaths = require('get-dev-paths')
const blacklist = require('metro-config/src/defaults/blacklist')

const projectRoot = __dirname
const modules = getDevPaths(projectRoot).map(($) => fs.realpathSync($))

const blacklisted = modules.map((module) => new RegExp(`${module}/node_modules/react-native/.*`))
const currentDir = __dirname

module.exports = {
  // watchFolders: Array.from(new Set(modules)),
  watchFolders: [
    // To allow finding files outside mobile
    path.resolve(currentDir, '../lib'),
    path.resolve(currentDir, '../../../thirdVendors/color'),
    path.resolve(currentDir, '../../../globalLibrary/appMocks'),
    path.resolve(currentDir, '../native-base-shoutem-theme'),
    path.resolve(currentDir, '../native-base-variables'),
    path.resolve(currentDir, '../nativebase-theme-components')
  ],
  resolver: {
    extraNodeModules: {
      'react-native': path.resolve(projectRoot, '../../node_modules/react-native')
    },
    blacklistRE: blacklist(blacklisted),
    providesModuleNodeModules: [path.resolve(projectRoot, '../../node_modules')]
  }
}

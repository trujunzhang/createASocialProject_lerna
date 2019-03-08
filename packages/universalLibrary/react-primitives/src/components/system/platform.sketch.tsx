const { hasOwnProperty } = Object.prototype

const OS = 'ios'
export const Platform = {
  OS,
  Version: 1,
  select: (obj: any) => {
    if (hasOwnProperty.call(obj, Platform.OS)) {
      return obj[Platform.OS]
    }
    return obj.default
  },
  inject: (platform) => {
    // Use bracket accessor notation as workaround for
    // https://github.com/facebook/metro-bundler/issues/27
    Platform['OS'] = platform.OS // eslint-disable-line dot-notation
    Platform['Version'] = platform.Version // eslint-disable-line dot-notation
  }
}

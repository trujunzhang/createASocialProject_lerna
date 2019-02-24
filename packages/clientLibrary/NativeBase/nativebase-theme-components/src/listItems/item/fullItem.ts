import { themeVariables } from '@app/native-base-variables'

export function getFullItem(selectedStyle, variables: themeVariables, platform) {
  return {
    backgroundColor: 'red',
    borderBottomWidth: platform === 'ios' ? variables.borderWidth : null,
    marginLeft: 0,
    padding: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    borderColor: variables.listBorderColor
  }
}

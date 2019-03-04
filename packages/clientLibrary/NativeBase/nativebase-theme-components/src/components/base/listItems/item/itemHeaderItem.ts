import { themeVariables } from '@app/native-base-variables'

export function getItemHeaderItem(selectedStyle, variables: themeVariables, platform) {
  return {
    '.first': {
      paddingTop: variables.listItemPadding + 3
    },
    borderBottomWidth: platform === 'ios' ? variables.borderWidth : null,
    marginLeft: null,
    padding: variables.listItemPadding,
    paddingLeft: variables.listItemPadding + 5,
    paddingTop: platform === 'ios' ? variables.listItemPadding + 25 : undefined,
    paddingBottom: platform === 'android' ? variables.listItemPadding + 20 : undefined,
    flexDirection: 'row',
    borderColor: variables.listBorderColor,
    'NativeBase.Text': {
      fontSize: 14,
      color: platform === 'ios' ? undefined : variables.listNoteColor
    }
  }
}

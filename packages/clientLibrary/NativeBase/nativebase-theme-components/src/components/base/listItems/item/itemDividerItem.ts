import { themeVariables } from '@app/native-base-variables'

export function getItemDividerItem(selectedStyle, variables: themeVariables, platform) {
  return {
    borderBottomWidth: null,
    marginLeft: null,
    padding: variables.listItemPadding,
    paddingLeft: variables.listItemPadding + 5,
    backgroundColor: variables.listDividerBg,
    flexDirection: 'row',
    borderColor: variables.listBorderColor
  }
}

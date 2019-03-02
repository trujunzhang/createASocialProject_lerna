import * as _ from 'lodash'

// Custom
import { scrollHeaderTheme, headerLayoutTheme, fixLeftTheme, fixRightTheme } from './custom'

// Common
import { bodyTheme } from './Body'
import { leftTheme } from './Left'
import { rightTheme } from './Right'
import { headerTheme } from './Header'
import { switchTheme } from './Switch'
import { thumbnailTheme } from './Thumbnail'
import { containerTheme } from './Container'
import { contentTheme } from './Content'
import { buttonTheme } from './Button'
import { titleTheme } from './Title'
import { subtitleTheme } from './Subtitle'
import { inputGroupTheme } from './InputGroup'
import { badgeTheme } from './Badge'
import { checkBoxTheme } from './CheckBox'
import { cardTheme } from './Card'
import { radioTheme } from './Radio'
import { liTheme } from './Li'
import { ulTheme } from './Ul'
import { pTheme } from './P'
import { h3Theme } from './H3'
import { h2Theme } from './H2'
import { h1Theme } from './H1'
import { footerTheme } from './Footer'
import { footerTabTheme } from './FooterTab'
import { fabTheme } from './Fab'
import { itemTheme } from './Item'
import { labelTheme } from './Label'
import { textAreaTheme } from './Textarea'
import { textTheme } from './Text'
import { toastTheme } from './Toast'
import { tabTheme } from './Tab'
import { tabBarTheme } from './TabBar'
import { tabContainerTheme } from './TabContainer'
import { viewTheme } from './View'
import { tabHeadingTheme } from './TabHeading'
import { iconTheme } from './Icon'
import { inputTheme } from './Input'
import { swipeRowTheme } from './SwipeRow'
import { segmentTheme } from './Segment'
import { spinnerTheme } from './Spinner'
import { cardItemTheme } from './CardItem'
import { listItemTheme } from './ListItem'
import { formTheme } from './Form'
import { separatorTheme } from './Separator'
import { pickerTheme } from './Picker'
import { pageLayoutTheme } from './PageLayout'

import { themeVariables } from '@app/native-base-variables'

export const getThemeStyle = (variables: themeVariables) => {
  const PickerNB = Object.assign(pickerTheme(variables), {
    'NativeBase.Button': {
      'NativeBase.Text': {}
    }
  })

  const theme = {
    variables,
    NativeBase: {
      ScrollHeader: scrollHeaderTheme(variables),
      HeaderLayout: headerLayoutTheme(variables),

      PageLayout: pageLayoutTheme(variables),
      FixLeft: fixLeftTheme(variables),
      FixRight: fixRightTheme(variables),
      Left: leftTheme(variables),
      Right: rightTheme(variables),
      Body: bodyTheme(variables),
      Header: headerTheme(variables),
      Button: buttonTheme(variables),
      Title: titleTheme(variables),
      Subtitle: subtitleTheme(variables),
      InputGroup: inputGroupTheme(variables),
      Input: inputTheme(variables),
      Badge: badgeTheme(variables),
      CheckBox: checkBoxTheme(variables),
      Radio: radioTheme(variables),
      Card: cardTheme(variables),
      CardItem: cardItemTheme(variables),
      Toast: toastTheme(variables),
      Ul: ulTheme(variables),
      Li: liTheme(variables),
      P: pTheme(variables),
      H1: h1Theme(variables),
      H2: h2Theme(variables),
      H3: h3Theme(variables),
      Form: formTheme(variables),
      Container: containerTheme(variables),
      Content: contentTheme(variables),
      Footer: footerTheme(variables),
      Tabs: {
        flex: 1
      },
      FooterTab: footerTabTheme(variables),
      ListItem: listItemTheme(variables),
      ListItem1: listItemTheme(variables),
      Icon: iconTheme(variables),
      IconNB: iconTheme(variables),
      Text: textTheme(variables),
      Spinner: spinnerTheme(variables),
      Fab: fabTheme(variables),
      Item: itemTheme(variables),
      Label: labelTheme(variables),
      Textarea: textAreaTheme(variables),
      PickerNB,
      Tab: tabTheme(variables),
      Segment: segmentTheme(variables),
      TabBar: tabBarTheme(variables),
      ViewNB: viewTheme(variables),
      TabHeading: tabHeadingTheme(variables),
      TabContainer: tabContainerTheme(variables),
      Switch: switchTheme(variables),
      Separator: separatorTheme(variables),
      SwipeRow: swipeRowTheme(variables),
      Thumbnail: thumbnailTheme(variables)
    }
  }

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      // console.log('styleName', styleName);
      // console.log('parentKey', parentKey);
      if (styleName.indexOf('.') === 0 && parentKey && parentKey.indexOf('.') === 0) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {}
          } else {
            grandparent[styleName][parentKey] = style
          }
        }
      }
      if (
        style &&
        typeof style === 'object' &&
        styleName !== 'fontVariant' &&
        styleName !== 'transform'
      ) {
        cssifyTheme(parent, style, styleName)
      }
    })
  }

  cssifyTheme(null, theme, null)

  return theme
}

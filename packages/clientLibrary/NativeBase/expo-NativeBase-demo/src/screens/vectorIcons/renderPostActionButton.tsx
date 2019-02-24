import * as React from 'react'

/**
 *
 * default icon type:
 *     Ionicons(libiary)
 *     MaterialIcons(politicl)
 *
 * Homepage:
 *     https://github.com/oblador/react-native-vector-icons
 *
 * All icons:
 *     https://oblador.github.io/react-native-vector-icons/
 *
 * entypo:
 *     http://entypo.com/
 *
 * MaterialIcons:
 *     https://www.google.com/design/icons/
 *
 * fontawesome:
 *     https://fontawesome.com/icons?from=io
 *
 * Ionicons:
 *     https://ionicons.com/
 *
 *     (Office document):
 *     https://ionicframework.com/docs/ionicons/
 */

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Alert,
  Keyboard,
  Platform,
  SectionList,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from '@app/native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {
  IconVectorTypeEntypo,
  IconVectorTypeEvilIcons,
  IconVectorTypeFeather,
  IconVectorTypeFontAwesome,
  IconVectorTypeFoundation,
  IconVectorTypeIonicons,
  IconVectorTypeMaterialCommunityIcons,
  IconVectorTypeMaterialIcons,
  IconVectorTypeOcticons,
  IconVectorTypeSimpleLineIcons,
  IconVectorTypeZocial
} from '@app/native-base'

interface IButtonItem {
  name: string
  iconType?: string
}
const actionHeight = 35
const postActionColor = '#999'
const votedColor = '#1ca0d8'
const highlight = false
const color = highlight ? votedColor : postActionColor
const actionButtonStyles = {
  rowContainer: {
    backgroundColor: 'yellow',
    // paddingHorizontal: 12,
    // marginHorizontal: 6,
    flexDirection: 'row',
    flex: 1,
    height: actionHeight
  },
  buttonContainer: {
    backgroundColor: 'orange',
    flex: 1,
    height: actionHeight,
    justifyContent: null,
    minWidth: 50,
    marginLeft: 0,
    marginRight: 6
  },
  shareIconContainer: {
    flex: 1,
    height: actionHeight,
    minWidth: 50
  },
  icon: {
    color,
    marginLeft: 0,
    paddingLeft: 0,
    paddingTop: 0,
    marginHorizontal: 0,
    backgroundColor: 'red'
  },
  text: {
    color,
    paddingLeft: 6,
    fontSize: 12,
    backgroundColor: 'black'
  }
}
export const renderPostActionButton = ({ items }: { items: IButtonItem[] }) => {
  return (
    <View style={[actionButtonStyles.rowContainer as any]}>
      <Button iconLeft transparent style={[actionButtonStyles.buttonContainer]}>
        <Icon style={[actionButtonStyles.icon]} name={'triangle-up'} type={IconVectorTypeEntypo} />
        <Text style={[actionButtonStyles.text]}>{'123'}</Text>
      </Button>
      <Button iconLeft transparent style={[actionButtonStyles.buttonContainer]}>
        <Icon
          style={[actionButtonStyles.icon]}
          name={'triangle-down'}
          type={IconVectorTypeEntypo}
        />
        <Text style={[actionButtonStyles.text]}>{'234'}</Text>
      </Button>
      <Button iconLeft transparent style={[actionButtonStyles.buttonContainer]}>
        <Icon
          style={[actionButtonStyles.icon]}
          name={'chatbubbles'}
          type={IconVectorTypeIonicons}
        />
        <Text style={[actionButtonStyles.text]}>{'123k'}</Text>
      </Button>
      <Button onlyCenter transparent style={[actionButtonStyles.shareIconContainer]}>
        <Icon
          iconSize={18}
          style={[actionButtonStyles.icon]}
          type={IconVectorTypeMaterialIcons}
          name={'share'}
        />
      </Button>
    </View>
  )
}

// { name: 'notifications' },
// { name: 'close' }
// { name: 'chatboxes' },
export const BUTTONS: IButtonItem[] = [
  { name: 'triangle-up', iconType: IconVectorTypeEntypo },
  { name: 'triangle-down', iconType: IconVectorTypeEntypo },
  { name: 'chatbubbles' }
]

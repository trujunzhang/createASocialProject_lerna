import * as React from 'react'
import { Svg } from 'expo'

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
const singleActionButtonStyles = {
  rowContainer: {
    // backgroundColor: 'yellow',
    // paddingHorizontal: 12,
    // marginHorizontal: 6,
    flexDirection: 'row',
    // flex: 1,
    height: actionHeight
  },
  buttonContainer: {
    // backgroundColor: 'orange',
    flex: 1,
    height: actionHeight,
    justifyContent: null,
    minWidth: 80,
    maxWidth: 80,
    marginLeft: 0,
    marginRight: 6
  },
  shareIconContainer: {
    flex: 1,
    height: actionHeight,
    minWidth: 80,
    maxWidth: 80
  },
  icon: {
    color: 'white',
    marginLeft: 0,
    paddingLeft: 0,
    paddingTop: 0,
    marginHorizontal: 0
    // backgroundColor: 'red'
  },
  saveSvg: {
    marginLeft: 12
  },
  text: {
    color,
    paddingLeft: 6,
    fontSize: 12
    // backgroundColor: 'black'
  }
}
export const renderArticleActionButton = ({ items }: { items: IButtonItem[] }) => {
  const savePath =
    'M9,6 L6,6 L6,7 L9,7 L9,10 L10,10 L10,7 L13,7 L13,6 L10,6 L10,3 L9,3 L9,6 Z M0,0 L8,0 L8,1 L0,1 L0,0 Z M0,3 L8,3 L8,4 L0,4 L0,3 Z M0,6 L5,6 L5,7 L0,7 L0,6 Z'

  return (
    <View style={[singleActionButtonStyles.rowContainer as any]}>
      <Button onlyCenter facebook style={[singleActionButtonStyles.shareIconContainer]}>
        <Icon
          iconSize={18}
          style={[singleActionButtonStyles.icon]}
          type={IconVectorTypeZocial}
          name={'facebook'}
        />
      </Button>
      <Button onlyCenter twitter style={[singleActionButtonStyles.shareIconContainer]}>
        <Icon
          iconSize={18}
          style={[singleActionButtonStyles.icon]}
          type={IconVectorTypeZocial}
          name={'twitter'}
        />
      </Button>
      <Button iconLeft transparent style={[singleActionButtonStyles.buttonContainer]}>
        <Svg style={singleActionButtonStyles.saveSvg} viewBox={'0 0 13 10'} width={13} height={10}>
          <Svg.G>
            <Svg.Path fill="#999" d={savePath} />
          </Svg.G>
        </Svg>
        <Text style={[singleActionButtonStyles.text]}>{'save'}</Text>
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

import { StyleSheet, View, Text, FlatList, TouchableHighlight, Platform } from 'react-native'
export const tweetDetailsStyles = StyleSheet.create({
  tweetHead: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0
  },
  timeStamp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  tweetFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: '#CCC',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tweetReply: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    paddingBottom: 0
  }
})

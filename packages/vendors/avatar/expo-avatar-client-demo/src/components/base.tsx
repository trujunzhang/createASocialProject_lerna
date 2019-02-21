import { StyleSheet } from 'react-native'

export const baseStyles = StyleSheet.create({
  horizontalMiddle: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  horizontalLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  horizontalRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  verticalTop: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  verticalCenter: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  absoluteFullSection: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
    // backgroundColor: '#ff0000'
    // backgroundColor: 'red'
  }
})

import { StyleSheet } from 'react-sketchapp'

export const getSvgProps = (props: any) => {
  const fixedStyle = StyleSheet.flatten(props.style)
  const color = props.color || (fixedStyle || ({} as any)).color
  const fixedSize = props.size || (fixedStyle || ({} as any)).fontSize || 20

  return {
    fixedStyle,
    color,
    fixedSize
  }
}

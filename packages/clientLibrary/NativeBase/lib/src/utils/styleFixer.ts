import { LodashUtils as _ } from '@app/tools'
import { StyleSheet } from 'react-primitives'
export class StyleFixer {
  static flatten(props: any) {
    const fixedProps = !!props ? props : { style: {} }

    // console.log('StyleFixer:(fixedProps) ', JSON.stringify(fixedProps))

    const style = fixedProps.style || {}
    const nextStyle: any = StyleSheet.flatten(style)
    // console.log('StyleFixer:(nextStyle) ', JSON.stringify(nextStyle))

    const nextProps = {
      ...fixedProps,
      ...{
        style: nextStyle
      }
    }

    // console.log('StyleFixer:(nextProps) ', JSON.stringify(nextProps))
    return nextProps
    // return props
  }
}

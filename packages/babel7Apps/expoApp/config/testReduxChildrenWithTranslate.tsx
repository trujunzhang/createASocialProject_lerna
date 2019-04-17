import * as React from 'react'

import { I18nextProvider } from '@app/tools'

// get language from query parameter or url path
const lang = 'en'

import { mockedI18n } from './utils'

export const testReduxChildrenWithTranslatePage = (children: any): React.ReactElement<any> => {
  class Common extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return <I18nextProvider i18n={mockedI18n}>{children}</I18nextProvider>
    }
  }

  return <Common />
}

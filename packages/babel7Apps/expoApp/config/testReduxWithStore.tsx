import * as React from 'react'

import { Provider } from 'react-redux'

import { I18nextProvider } from '@app/tools'

import { mockedI18n } from './utils'

// get language from query parameter or url path
const lang = 'en'

export const testReduxWithStorePage = (
  children: any,
  store: any,
  properties: any = {}
): React.ReactElement<any> => {
  class Common extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Provider store={store}>
          <I18nextProvider i18n={mockedI18n}>{children}</I18nextProvider>
        </Provider>
      )
    }
  }

  return <Common />
}

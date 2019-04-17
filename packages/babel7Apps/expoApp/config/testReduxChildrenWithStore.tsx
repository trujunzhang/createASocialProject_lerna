import * as React from 'react'

import { I18nextProvider } from '@app/tools'
// get language from query parameter or url path
const lang = 'en'

import { mockedI18n } from './utils'

import { Provider } from 'react-redux'

export const testReduxChildrenWithStorePage = (
  children: any,
  store: any
): React.ReactElement<any> => {
  class Common extends React.Component {
    private i18n: any

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

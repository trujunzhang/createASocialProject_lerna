import * as React from 'react'

import { I18nextProvider } from '@app/tools'

// get language from query parameter or url path
const lang = 'en'

import { mockedI18n } from './utils'

// Store Initialization
// ------------------------------------
import createStore from '@src/redux/create'

const store = createStore()

import { Provider } from 'react-redux'

function isMobileBrowser(userAgent) {
  return userAgent.match('CriOS') || userAgent.match(/mobile/i)
}

export const testReduxPage = (
  children: any,
  showTopHeroPanel: boolean = false
): React.ReactElement<any> => {
  class Common extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <Provider store={store}>
          <I18nextProvider i18n={mockedI18n}>
            {/* <Telescope.Layout showTopHeroPanel={showTopHeroPanel}>{children}</Telescope.Layout> */}
          </I18nextProvider>
        </Provider>
      )
    }
  }

  return <Common />
}

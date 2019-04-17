import * as React from 'react'

import Telescope from '@client/components/lib'
import { I18nextProvider } from '@app/tools'
import { mockedI18n } from './utils'

// get language from query parameter or url path
const lang = 'en'

export const reduxPage = (key, showTopHeroPanel = false) => {
  class Common extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const comp = Telescope.components[key]
      const children = React.createElement(comp, {})
      return (
        <I18nextProvider i18n={mockedI18n}>
          <Telescope.components.Layout showTopHeroPanel={showTopHeroPanel}>
            {children}
          </Telescope.components.Layout>
        </I18nextProvider>
      )
    }
  }

  return Common
}

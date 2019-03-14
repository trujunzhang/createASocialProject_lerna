import 'react-native' // So important
import * as React from 'react' // So important
import { Octicons } from '../octicons'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
    const page = <Octicons name="home" style={{ color: '#999' }} />
    const rendered = renderer.create(page).toJSON()
    expect(rendered).toMatchSnapshot()
})

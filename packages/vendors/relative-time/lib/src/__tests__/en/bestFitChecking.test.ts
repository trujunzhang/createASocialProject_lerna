import * as sinon from 'sinon'

import { RelativeTime } from '../../index'

import { TranslationFunction } from '@app/intl'
import { getI18nextMockerWithResources } from '../utils'

describe('relative-time', () => {
  let clock
  let relativeTime

  beforeAll(async () => {
    const cb = (t: TranslationFunction) => {
      relativeTime = new RelativeTime(t)
    }
    getI18nextMockerWithResources(cb)
  })

  describe('bestFit', () => {
    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date('2016-04-10 12:00:00').getTime())
    })

    afterEach(() => {
      clock.restore()
    })

    it('should format seconds-distant dates', () => {
      expect(relativeTime.format(new Date('2016-04-10 11:59:01'))).toEqual('59 seconds ago')
    })
  })
})

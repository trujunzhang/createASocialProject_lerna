import { getDangerCommon } from './dangerCommon'
import { getDarkCommon } from './darkCommon'
import { getInfoCommon } from './infoCommon'
import { getLightCommon } from './lightCommon'
import { getPrimaryCommon } from './primaryCommon'
import { getSuccessCommon } from './successCommon'
import { getWarningCommon } from './warningCommon'
import { getTwitterCommon } from './twitterCommon'
import { getFacebookCommon } from './facebookCommon'

import { themeVariables } from '@app/native-base-variables'

export function getCommons(variables: themeVariables, platform, platformStyle) {
  const dangerCommon = getDangerCommon(variables, platform, platformStyle)
  const darkCommon = getDarkCommon(variables, platform, platformStyle)
  const infoCommon = getInfoCommon(variables, platform, platformStyle)
  const lightCommon = getLightCommon(variables, platform, platformStyle)
  const primaryCommon = getPrimaryCommon(variables, platform, platformStyle)
  const successCommon = getSuccessCommon(variables, platform, platformStyle)
  const warningCommon = getWarningCommon(variables, platform, platformStyle)
  const twitterCommon = getTwitterCommon(variables, platform, platformStyle)
  const facebookCommon = getFacebookCommon(variables, platform, platformStyle)

  return {
    dangerCommon,
    darkCommon,
    infoCommon,
    lightCommon,

    primaryCommon,
    successCommon,
    warningCommon,

    twitterCommon,
    facebookCommon
  }
}

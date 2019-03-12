

import {
    // For demo
    CurrentRNDemoPage,
} from '@app/nb-demo-shared-components'

export const fixRouteNameExist = (routeConfigs: any) => {
    const screenKeys = Object.keys(routeConfigs)

    // console.log('stackRouteConfigs: ', screenKeys)

    const routeName = CurrentRNDemoPage.name

    if (screenKeys.indexOf(routeName) !== -1) {
        return routeName
    }

    return 'IconBtn'
}
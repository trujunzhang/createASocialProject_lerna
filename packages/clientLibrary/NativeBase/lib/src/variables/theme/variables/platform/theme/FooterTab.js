import { platform } from '../../utils';
export const footerTabVariables = {
    // FooterTab
    tabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
    tabBarTextSize: platform === 'ios' ? 14 : 11,
    activeTab: platform === 'ios' ? '#007aff' : '#fff',
    sTabBarActiveTextColor: '#007aff',
    tabBarActiveTextColor: platform === 'ios' ? '#007aff' : '#fff',
    tabActiveBgColor: platform === 'ios' ? '#cde1f9' : '#3F51B5'
};
//# sourceMappingURL=FooterTab.js.map
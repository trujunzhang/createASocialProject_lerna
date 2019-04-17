import { platform } from '../../utils';
export const footerTabVariables = {
    // FooterTab
    tabBarTextColor: platform === 'ios' ? '#737373' : '#bfc6ea',
    tabBarTextSize: platform === 'ios' ? 14 : 11,
    activeTab: platform === 'ios' ? '#007aff' : '#fff',
    sTabBarActiveTextColor: '#007aff',
    tabBarActiveTextColor: platform === 'ios' ? '#2874F0' : '#fff',
    tabActiveBgColor: platform === 'ios' ? '#cde1f9' : '#3F51B5'
};
//# sourceMappingURL=FooterTab.js.map
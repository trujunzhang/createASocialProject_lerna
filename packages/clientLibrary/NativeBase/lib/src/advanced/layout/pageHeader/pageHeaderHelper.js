class PageHeaderHelper {
    static shouldUseFixLeftAndRight(toolbarParams) {
        const { centerElement } = toolbarParams;
        if (!!centerElement) {
            const { searchBarObject } = centerElement;
            return !!searchBarObject;
        }
        return false;
    }
    static checkShouldHiddenHeader(toolbarParams) {
        const { leftElement, centerElement, rightElement } = toolbarParams;
        if (Object.keys(leftElement).length === 0 &&
            Object.keys(centerElement).length === 0 &&
            Object.keys(rightElement).length === 0) {
            return true;
        }
        return false;
    }
    static hasSubtitle(toolbarParams) {
        const { centerElement } = toolbarParams;
        const { titleObject } = centerElement;
        if (!!titleObject && titleObject.subTitle !== undefined && !!titleObject.subTitle) {
            return true;
        }
        return false;
    }
}
export function getPageHeaderState(toolbarParams) {
    const { visible } = toolbarParams;
    const { showLeftElement, showCenterElement, showRightElement } = visible || {
        showLeftElement: true,
        showCenterElement: true,
        showRightElement: true
    };
    return {
        hiddenHeader: PageHeaderHelper.checkShouldHiddenHeader(toolbarParams),
        hasSubtitle: PageHeaderHelper.hasSubtitle(toolbarParams),
        useFixLeftAndRight: PageHeaderHelper.shouldUseFixLeftAndRight(toolbarParams),
        showLeftElement: showLeftElement === undefined ? true : showLeftElement,
        showCenterElement: showCenterElement === undefined ? true : showCenterElement,
        showRightElement: showRightElement === undefined ? true : showRightElement
    };
}
//# sourceMappingURL=pageHeaderHelper.js.map
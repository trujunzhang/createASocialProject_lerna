function hasOneLineCenter(centerElement) {
    if (typeof centerElement === 'object') {
        const object = centerElement;
        return object.secondaryText === undefined;
    }
    return true;
}
export function getExListItemState(props) {
    const { leftElement, centerElement, rightElement } = props;
    return {
        hasLeft: leftElement != undefined,
        oneLineCenter: hasOneLineCenter(centerElement)
    };
}
//# sourceMappingURL=ExListItemHelper.js.map
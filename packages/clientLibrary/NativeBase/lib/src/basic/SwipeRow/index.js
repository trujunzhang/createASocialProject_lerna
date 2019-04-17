import * as React from 'react';
import { Animated, PanResponder, View } from 'react-primitives';
import { connectStyle } from 'native-base-shoutem-theme';
import { Left } from '@appBasic/Left';
import { Right } from '@appBasic/Right';
import { Body } from '@appBasic/Body';
import { ListItem } from '@appBasic/ListItem';
import { mapPropsToStyleNames } from '@app/tools';
const PREVIEW_OPEN_DELAY = 700;
const PREVIEW_CLOSE_DELAY = 300;
class SwipeRow extends React.Component {
    constructor(props) {
        super(props);
        this.horizontalSwipeGestureBegan = false;
        this.swipeInitialX = null;
        this.parentScrollEnabled = true;
        this.ranPreview = false;
        this.state = {
            dimensionsSet: false,
            hiddenHeight: 0,
            hiddenWidth: 0
        };
        this._translateX = new Animated.Value(0);
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => this.handleOnMoveShouldSetPanResponder(e, gs),
            onPanResponderMove: (e, gs) => this.handlePanResponderMove(e, gs),
            onPanResponderRelease: (e, gs) => this.handlePanResponderEnd(e, gs),
            onPanResponderTerminate: (e, gs) => this.handlePanResponderEnd(e, gs),
            onShouldBlockNativeResponder: (_) => false
        });
    }
    getPreviewAnimation(toValue, delay) {
        return Animated.timing(this._translateX, {
            duration: this.props.previewDuration,
            toValue,
            delay
        });
    }
    onContentLayout(e) {
        this.setState({
            dimensionsSet: !this.props.recalculateHiddenLayout,
            hiddenHeight: e.nativeEvent.layout.height,
            hiddenWidth: e.nativeEvent.layout.width
        });
        if (this.props.preview && !this.ranPreview) {
            this.ranPreview = true;
            let previewOpenValue = this.props.previewOpenValue || (this.props.rightOpenValue || 0) * 0.5;
            this.getPreviewAnimation(previewOpenValue, PREVIEW_OPEN_DELAY).start((_) => {
                this.getPreviewAnimation(0, PREVIEW_CLOSE_DELAY).start();
            });
        }
    }
    handleOnMoveShouldSetPanResponder(e, gs) {
        const { dx } = gs;
        return Math.abs(dx) > (this.props.directionalDistanceChangeThreshold || 0);
    }
    handlePanResponderMove(e, gestureState) {
        const { dx, dy } = gestureState;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);
        // this check may not be necessary because we don't capture the move until we pass the threshold
        // just being extra safe here
        if (absDx > (this.props.directionalDistanceChangeThreshold || 0) ||
            absDy > (this.props.directionalDistanceChangeThreshold || 0)) {
            // we have enough to determine direction
            if (absDy > absDx && !this.horizontalSwipeGestureBegan) {
                // user is moving vertically, do nothing, listView will handle
                return;
            }
            // user is moving horizontally
            if (this.parentScrollEnabled) {
                // disable scrolling on the listView parent
                this.parentScrollEnabled = false;
                this.props.setScrollEnabled && this.props.setScrollEnabled(false);
            }
            if (this.swipeInitialX === null) {
                // set tranlateX value when user started swiping
                this.swipeInitialX = this._translateX._value;
            }
            if (!this.horizontalSwipeGestureBegan) {
                this.horizontalSwipeGestureBegan = true;
                this.props.swipeGestureBegan && this.props.swipeGestureBegan();
            }
            let newDX = this.swipeInitialX + dx;
            if (this.props.disableLeftSwipe && newDX < 0) {
                newDX = 0;
            }
            if (this.props.disableRightSwipe && newDX > 0) {
                newDX = 0;
            }
            if (this.props.stopLeftSwipe && newDX > this.props.stopLeftSwipe) {
                newDX = this.props.stopLeftSwipe;
            }
            if (this.props.stopRightSwipe && newDX < this.props.stopRightSwipe) {
                newDX = this.props.stopRightSwipe;
            }
            this._translateX.setValue(newDX);
        }
    }
    handlePanResponderEnd(e, gestureState) {
        // re-enable scrolling on listView parent
        if (!this.parentScrollEnabled) {
            this.parentScrollEnabled = true;
            this.props.setScrollEnabled && this.props.setScrollEnabled(true);
        }
        // finish up the animation
        let toValue = 0;
        if (this._translateX._value >= 0) {
            // trying to open right
            if (this._translateX._value >
                (this.props.leftOpenValue || 0) * ((this.props.swipeToOpenPercent || 100) / 100)) {
                // we're more than halfway
                toValue = this.props.leftOpenValue;
            }
        }
        else {
            // trying to open left
            if (this._translateX._value <
                (this.props.rightOpenValue || 0) * ((this.props.swipeToOpenPercent || 100) / 100)) {
                // we're more than halfway
                toValue = this.props.rightOpenValue;
            }
        }
        this.manuallySwipeRow(toValue);
    }
    /*
     * This method is called by SwipeListView
     */
    closeRow() {
        this.manuallySwipeRow(0);
    }
    openLeftRow() {
        this.manuallySwipeRow(this.props.leftOpenValue);
    }
    openRightRow() {
        this.manuallySwipeRow(this.props.rightOpenValue);
    }
    manuallySwipeRow(toValue) {
        Animated.spring(this._translateX, {
            toValue,
            friction: this.props.friction,
            tension: this.props.tension
        }).start((_) => {
            if (toValue === 0) {
                this.props.onRowDidClose && this.props.onRowDidClose();
            }
            else {
                this.props.onRowDidOpen && this.props.onRowDidOpen();
            }
        });
        if (toValue === 0) {
            this.props.onRowClose && this.props.onRowClose();
        }
        else {
            this.props.onRowOpen && this.props.onRowOpen(toValue);
        }
        // reset everything
        this.swipeInitialX = null;
        this.horizontalSwipeGestureBegan = false;
    }
    renderMainContent() {
        // We do this annoying if statement for performance.
        // We don't want the onLayout func to run after it runs once.
        if (this.state.dimensionsSet) {
            return (React.createElement(Animated.View, Object.assign({}, this._panResponder.panHandlers, { style: {
                    transform: [{ translateX: this._translateX }],
                    zIndex: 2
                } }), !this.props.list ? (React.createElement(ListItem, { list: true, style: [this.props.style] }, this.props.body)) : (React.createElement(View, { style: [{ backgroundColor: '#FFF' }, this.props.style] }, this.props.body))));
        }
        else {
            return (React.createElement(Animated.View, Object.assign({}, this._panResponder.panHandlers, { onLayout: (e) => this.onContentLayout(e), style: {
                    transform: [{ translateX: this._translateX }],
                    zIndex: 2
                } }), !this.props.list ? (React.createElement(ListItem, { list: true, style: [
                    this.props.style,
                    {
                    // backgroundColor: 'black'
                    }
                ] }, this.props.body)) : (React.createElement(View, { style: [
                    {
                        backgroundColor: '#FFF'
                    },
                    this.props.style
                ] }, this.props.body))));
        }
    }
    render() {
        return (React.createElement(View, { style: this.props.style ? this.props.style : undefined },
            React.createElement(View, { style: [
                    styles.hidden,
                    {
                        height: this.state.hiddenHeight,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }
                ] },
                React.createElement(Left, { style: { width: this.props.leftOpenValue, zIndex: 1 } }, this.props.left),
                React.createElement(Body, { style: { flex: 0 } }),
                React.createElement(Right, { style: { width: -this.props.rightOpenValue, zIndex: 1 } }, this.props.right)),
            this.renderMainContent()));
    }
}
SwipeRow.defaultProps = {
    leftOpenValue: 0,
    rightOpenValue: 0,
    closeOnRowPress: true,
    disableLeftSwipe: false,
    disableRightSwipe: false,
    recalculateHiddenLayout: false,
    preview: false,
    previewDuration: 300,
    directionalDistanceChangeThreshold: 2,
    swipeToOpenPercent: 50
};
const styles = {
    container: {
    // As of RN 0.29 flex: 1 is causing all rows to be the same height
    // flex: 1
    },
    hidden: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0
    }
};
const StyledSwipeRow = connectStyle('NativeBase.SwipeRow', {}, mapPropsToStyleNames)(SwipeRow);
export { StyledSwipeRow as SwipeRow };
//# sourceMappingURL=index.js.map
import {
  GestureResponderHandlers,
  PanResponderInstance,
  PanResponderProps,
  PanResponderCallbacks
} from '../../../typings'

import * as React from 'react'

import { View } from 'react-sketchapp'

const clearInteractionHandle = (interactionState, callback, event, gestureState) => {
  if (interactionState.handle) {
    interactionState.handle = null
  }
  if (callback) {
    callback(event, gestureState)
  }
}

const getPanHandlers = (
  panResponder,
  config: PanResponderCallbacks,
  gestureState,
  interactionState
): GestureResponderHandlers => {
  const panHandlers = {
    onStartShouldSetResponder: function(e) {
      return config.onStartShouldSetPanResponder === undefined
        ? false
        : config.onStartShouldSetPanResponder(e, gestureState)
    },
    onMoveShouldSetResponder: function(e) {
      return config.onMoveShouldSetPanResponder === undefined
        ? false
        : config.onMoveShouldSetPanResponder(e, gestureState)
    },
    onStartShouldSetResponderCapture: function(e) {
      // TODO: Actually, we should reinitialize the state any time
      // touches.length increases from 0 active to > 0 active.
      if (e.nativeEvent.touches.length === 1) {
        panResponder._initializeGestureState(gestureState)
      }
      return config.onStartShouldSetPanResponderCapture !== undefined
        ? config.onStartShouldSetPanResponderCapture(e, gestureState)
        : false
    },

    onMoveShouldSetResponderCapture: function(e) {
      const touchHistory = e.touchHistory
      // Responder system incorrectly dispatches should* to current responder
      // Filter out any touch moves past the first one - we would have
      // already processed multi-touch geometry during the first event.
      panResponder._updateGestureStateOnMove(gestureState, touchHistory)
      return config.onMoveShouldSetPanResponderCapture
        ? config.onMoveShouldSetPanResponderCapture(e, gestureState)
        : false
    },

    onResponderGrant: function(e) {
      if (!interactionState.handle) {
        // interactionState.handle = InteractionManager.createInteractionHandle()
      }
      if (config.onPanResponderGrant) {
        config.onPanResponderGrant(e, gestureState)
      }
      // TODO: t7467124 investigate if this can be removed
      return config.onShouldBlockNativeResponder === undefined
        ? true
        : config.onShouldBlockNativeResponder(e, gestureState)
    },

    onResponderReject: function(e) {
      clearInteractionHandle(interactionState, config.onPanResponderReject, e, gestureState)
    },

    onResponderRelease: function(e) {
      clearInteractionHandle(interactionState, config.onPanResponderRelease, e, gestureState)
      panResponder._initializeGestureState(gestureState)
    },

    onResponderStart: function(e) {
      const touchHistory = e.touchHistory
      if (config.onPanResponderStart) {
        config.onPanResponderStart(e, gestureState)
      }
    },

    onResponderMove: function(e) {
      const touchHistory = e.touchHistory
      // Guard against the dispatch of two touch moves when there are two
      // simultaneously changed touches.
      // Filter out any touch moves past the first one - we would have
      // already processed multi-touch geometry during the first event.
      panResponder._updateGestureStateOnMove(gestureState, touchHistory)
      if (config.onPanResponderMove) {
        config.onPanResponderMove(e, gestureState)
      }
    },

    onResponderEnd: function(e) {
      const touchHistory = e.touchHistory
      clearInteractionHandle(interactionState, config.onPanResponderEnd, e, gestureState)
    },

    onResponderTerminate: function(e) {
      clearInteractionHandle(interactionState, config.onPanResponderTerminate, e, gestureState)
      panResponder._initializeGestureState(gestureState)
    },

    onResponderTerminationRequest: function(e) {
      return config.onPanResponderTerminationRequest === undefined
        ? true
        : config.onPanResponderTerminationRequest(e, gestureState)
    }
  }
  return panHandlers
}

export class PanResponder implements PanResponderProps {
  _initializeGestureState = (gestureState) => {
    gestureState.moveX = 0
    gestureState.moveY = 0
    gestureState.x0 = 0
    gestureState.y0 = 0
    gestureState.dx = 0
    gestureState.dy = 0
    gestureState.vx = 0
    gestureState.vy = 0
    gestureState.numberActiveTouches = 0
    // All `gestureState` accounts for timeStamps up until:
    gestureState._accountsForMovesUpTo = 0
  }

  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove = (gestureState, touchHistory) => {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp
  }

  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create = (config: PanResponderCallbacks): PanResponderInstance => {
    const interactionState = {
      handle: null
    }
    const gestureState = {
      // Useful for debugging
      stateID: Math.random()
    }
    this._initializeGestureState(gestureState)

    return {
      panHandlers: getPanHandlers(this, config, gestureState, interactionState)
    }
  }
}

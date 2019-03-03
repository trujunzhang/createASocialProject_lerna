const dimensions = {};
const listeners = {};

const Dimensions = {
    /**
       * Initial dimensions are set before runApplication is called so they
       * should be available before any other require's are run, but may be
       * updated later.
       * Note: Although dimensions are available immediately, they may
       * change (e.g due to device rotation) so any rendering logic or
       * styles that depend on these constants should try to call this
       * function on every render, rather than caching the value (for
       * example, using inline styles rather than setting a value in a
       * StyleSheet).
       * Example: const {height, width} = Dimensions.get('window');
       @param dim Name of dimension as defined when calling set.
       @returns Value for the dimension.
       */
    // get(dim: "window" | "screen"): ScaledSize{
    get(dim) {
        if (Object.keys(dimensions).indexOf(dim) === -1) {
            return {
                "fontScale": 1, "width": 414, "height": 896, "scale": 2
            }
        }
        return dimensions[dimension];
    },

    set(initialDimensions) {
        if (initialDimensions) {
            dimensions.screen = initialDimensions.screen;
            dimensions.window = initialDimensions.window;
        }
    }
}

module.exports = Dimensions
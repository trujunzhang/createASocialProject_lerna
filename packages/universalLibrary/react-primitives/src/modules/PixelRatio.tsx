
export class PixelRatio {

  static Dimensions: any

  /**
   * Returns the device pixel density.
   */
  static get() {
    if (!!PixelRatio.Dimensions) {
      return PixelRatio.Dimensions.get('window').scale
    }
    return 2
  }

  /**
   * No equivalent for Web
   */
  static getFontScale() {
    if (!!PixelRatio.Dimensions) {
      return PixelRatio.Dimensions.get('window').fontScale || PixelRatio.get()
    }
    return 1
  }

  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  static getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * PixelRatio.get())
  }

  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  static roundToNearestPixel(layoutSize) {
    const ratio = PixelRatio.get()
    return Math.round(layoutSize * ratio) / ratio
  }
}


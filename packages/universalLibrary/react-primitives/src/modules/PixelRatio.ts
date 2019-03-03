export class PixelRatioHelper {
  private Dimensions: any = null

  constructor(Dimensions: any) {
    this.Dimensions = Dimensions
  }

  /**
   * Returns the device pixel density.
   */
  get() {
    if (!!this.Dimensions) {
      try {
        return this.Dimensions.get('window').scale
      } catch (error) {
      }
    }
    return 2
  }

  /**
   * No equivalent for Web
   */
  getFontScale() {
    if (!!this.Dimensions) {
      return this.Dimensions.get('window').fontScale || this.get()
    }
    return 1
  }

  /**
   * Converts a layout size (dp) to pixel size (px).
   * Guaranteed to return an integer number.
   */
  getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * this.get())
  }

  /**
   * Rounds a layout size (dp) to the nearest layout size that corresponds to
   * an integer number of pixels. For example, on a device with a PixelRatio
   * of 3, `PixelRatio.roundToNearestPixel(8.4) = 8.33`, which corresponds to
   * exactly (8.33 * 3) = 25 pixels.
   */
  roundToNearestPixel(layoutSize) {
    const ratio = this.get()
    return Math.round(layoutSize * ratio) / ratio
  }
}

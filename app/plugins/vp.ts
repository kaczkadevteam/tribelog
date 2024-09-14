import { ViewportBreakpoint } from '../../types/enums'

export default defineNuxtPlugin({
  name: 'vp',
  setup() {
    return {
      provide: {
        vp: {
          deviceRanges: {
            mobile: { breakpointEnd: ViewportBreakpoint.SM },
            tablet: { breakpointEnd: ViewportBreakpoint.LG, breakpointStart: ViewportBreakpoint.SM },
            desktop: { breakpointStart: ViewportBreakpoint.LG },
          },

          isDeviceUtil(device: { breakpointStart?: ViewportBreakpoint, breakpointEnd?: ViewportBreakpoint }): boolean {
            if (!device) {
              throw new Error('Device is not defined. Check your Viewport configuration. Supported device helpers are: `isMobile`, `isTablet`, `isDesktop`.')
            };

            if (device.breakpointEnd && device.breakpointStart) {
              return useViewport().isLessThan(device.breakpointEnd) && useViewport().isGreaterOrEquals(device.breakpointStart)
            }

            if (device.breakpointEnd) {
              return useViewport().isLessThan(device.breakpointEnd)
            }

            if (device.breakpointStart) {
              return useViewport().isGreaterOrEquals(device.breakpointStart)
            }

            return false
          },

          isMobile(): boolean {
            return this.isDeviceUtil(this.deviceRanges.mobile)
          },

          isTablet(): boolean {
            return this.isDeviceUtil(this.deviceRanges.tablet)
          },

          isDesktop(): boolean {
            return this.isDeviceUtil(this.deviceRanges.desktop)
          },

        },
      },
    }
  },
})

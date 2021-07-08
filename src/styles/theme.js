const COLORS = {
  // General
  black: '#000000',
  white: '#ffffff',

  // Primary
  'primary-default': '#2DAFBC',
  'primary-lighten-1': '#62C3CD',
  'primary-lighten-2': '#96D7DD',
  'primary-lighten-3': '#CAEBEE',
  'primary-lighten-4': '#E0F3F5',
  'primary-lighten-5': '#EAF7F8',
  'primary-lighten-6': '#F4FBFB',

  // Secondary
  'secondary-darken-1': '#06B8BC',
  'secondary-default': '#00E8ED',
  'secondary-lighten-1': '#40EEF2',
  'secondary-lighten-2': '#7FF3F6',
  'secondary-lighten-3': '#BFF9FA',
  'secondary-lighten-4': '#D9FCFD',
  'secondary-lighten-5': '#E5FCFD',
  'secondary-lighten-6': '#F2FEFE',

  // Grey PURE
  'grey-1': '#2D2D2D', // darken-3
  'grey-2': '#393939', // darken-2
  'grey-3': '#414141', // darken-1
  'grey-4': '#4C4C4C', // default
  'grey-5': '#787878', // lighten-1
  'grey-6': '#A6A6A6', // lighten-2
  'grey-7': '#D1D1D1', // lighten-3
  'grey-8': '#E3E3E3', // lighten-4
  'grey-9': '#EDEDED', // lighten-5
  'grey-10': '#F5F5F5', // lighten-6

  // Grey TRANSPARENT
  // 'grey-t-1': 'rgba(0,0,0,0.75)', // FIXME
  // 'grey-t-2': 'rgba(0,0,0,0.75)', //FIXME
  'grey-t-3': 'rgba(0,0,0,0.75)',
  'grey-t-4': 'rgba(0,0,0,0.7)',
  'grey-t-5': 'rgba(0,0,0,0.53)',
  'grey-t-6': 'rgba(0,0,0,0.35)',
  'grey-t-7': 'rgba(0,0,0,0.18)',
  'grey-t-8': 'rgba(0,0,0,0.11)',
  'grey-t-9': 'rgba(0,0,0,0.07)',
  'grey-t-10': 'rgba(0,0,0,0.04)',

  // Success
  'success-default': '#44AC49',
  'success-lighten-1': '#73C177',
  'success-lighten-2': '#A1D5A4',
  'success-lighten-3': '#D0EAD1',
  'success-lighten-4': '#E3F3E4',
  'success-lighten-5': '#ECF6EC',
  'success-lighten-6': '#F5FBF6',

  // Warning
  'warning-default': '#E5951E',
  'warning-lighten-1': '#ECB057',
  'warning-lighten-2': '#F2CA8E',
  'warning-lighten-3': '#F8E4C7',
  'warning-lighten-4': '#FBEFDE',
  'warning-lighten-5': '#FCF4E8',
  'warning-lighten-6': '#FDF9F4',

  // Error
  'danger-default': '#FF2945',
  'danger-lighten-1': '#FF5F74',
  'danger-lighten-2': '#FF94A2',
  'danger-lighten-3': '#FFC9D0',
  'danger-lighten-4': '#FFDFE3',
  'danger-lighten-5': '#FFE9EC',
  'danger-lighten-6': '#FFF4F5',

  // Info
  'info-default': '#4285F4',
  'info-lighten-1': '#72A4F7',
  'info-lighten-2': '#A0C2F9',
  'info-lighten-3': '#D0E0FC',
  'info-lighten-4': '#E3EDFE',
  'info-lighten-5': '#ECF2FD',
  'info-lighten-6': '#F5F9FE',

  // Gold
  'gold-default': '#EBBB74'
}

const FONT_FAMILIES = {
  heading: 'Montserrat-Bold',
  body: 'Montserrat-Regular'
}

const FONT_WEIGHTS = {
  medium: '500'
}

const LETTER_SPACINGS = {
  caption1: 0,
  caption2: 0
}

const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  xxl: 48,
  xxxl: 64
}

const BORDER_RADIUSES = {
  // xs2: 2,
  // xs: 4, // Default - 2
  sm2: 6
  // sm: 8, // Default - 4
  // md2: 10,
  // md: 12, // Default - 8
  // lg2: 14,
  // lg: 16, // Default - 16
  // xl2: 20,
  // xl: 24, // Default - 32
  // xxl2: 32,
  // xxl: 64,
}

const SHADOWS = {
  // xs: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 1.41,
  //   elevation: 2,
  // },
  // sm: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.22,
  //   shadowRadius: 2.22,
  //   elevation: 3,
  // },
  // md: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.23,
  //   shadowRadius: 2.62,
  //   elevation: 4,
  // },
  // lg: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // xl: {
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,
  //   elevation: 6,
  // },
}

const TOGGLES = {
  variants: {
    default: {
      variant: 'lightGrey',
      corners: 'round',
      border: 'thin',
      type: 'filled',
      color: COLORS['primary-default']
    },
    primary: {
      variant: 'primary',
      corners: 'round',
      border: 'thin',
      type: 'filled',
      color: COLORS.white
    }
  }
}

const STATUSES = {
  variants: {
    default: {
      wrapperBg: COLORS['grey-t-9'],
      bg: COLORS['grey-t-7']
    },
    active: {
      wrapperBg: COLORS['primary-lighten-5'],
      bg: COLORS['primary-default']
    },
    danger: {
      wrapperBg: COLORS['danger-lighten-5'],
      bg: COLORS['danger-default']
    },
    warning: {
      wrapperBg: COLORS['warning-lighten-5'],
      bg: COLORS['warning-default']
    }
  }
}

const CORE = {
  COLORS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  LETTER_SPACINGS,
  ICON_SIZES,
  BORDER_RADIUSES,
  SHADOWS,
  components: {
    // ALERTS: {},
    // AVATARS: avatars({theme: defaultTheme}),
    // BADGES: {},
    // BUTTON_ITEMS: {},
    // SWITCHES: switches({theme: defaultTheme}),
    // CARDS: cards({theme: defaultTheme}),
    // ITEMS: items,
    // CHECKBOXES: checkboxes({theme: defaultTheme}),
    // COLLAPSES: collapses(),
    // DAYS: days(),
    TOGGLES,
    STATUSES
  }
}

const EXTENSIONS = {
  ITEM_TOKENS: {
    BORDER_TOKENS: {},
    CORNER_TOKENS: {},
    SIZE_TOKENS: {
      xs: {
        paddingHorizontal: 4,
        // fontSize: CORE.FONT_SIZES.caption1,
        // lineHeight: CORE.LINE_HEIGHTS.caption1,
        // infoTextFontSize: CORE.FONT_SIZES.caption2,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption2,
        iconSize: ICON_SIZES.xs,
        height: 20,
        width: 20,
        margin: 4
      },
      sm: {
        paddingHorizontal: 12,
        // fontSize: CORE.FONT_SIZES.body2,
        // lineHeight: CORE.LINE_HEIGHTS.body2,
        // infoTextFontSize: CORE.FONT_SIZES.caption1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption1,
        iconSize: ICON_SIZES.sm,
        height: 32,
        width: 32,
        margin: 12
      },
      md: {
        paddingHorizontal: 16,
        // fontSize: CORE.FONT_SIZES.body2,
        // lineHeight: CORE.LINE_HEIGHTS.body1,
        // infoTextFontSize: CORE.FONT_SIZES.caption1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.caption1,
        iconSize: ICON_SIZES.md,
        height: 48,
        width: 48,
        margin: 16
      },
      lg: {
        paddingHorizontal: 24,
        // fontSize: CORE.FONT_SIZES.h4,
        // lineHeight: CORE.LINE_HEIGHTS.h4,
        // infoTextFontSize: CORE.FONT_SIZES.body1,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.body1,
        iconSize: ICON_SIZES.lg,
        height: 52,
        width: 52,
        margin: 24
      },
      xl: {
        paddingHorizontal: 28,
        // fontSize: CORE.FONT_SIZES.h3,
        // lineHeight: CORE.LINE_HEIGHTS.h3,
        // infoTextFontSize: CORE.FONT_SIZES.h4,
        // infoTextLineHeight: CORE.LINE_HEIGHTS.h4,
        iconSize: ICON_SIZES.xl,
        height: 64,
        width: 64,
        margin: 28
      }
    },
    VARIANT_TOKENS: {
      primary: {
        backgroundColor: COLORS['secondary-default'],
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: COLORS['secondary-default'],
        borderTopColor: COLORS['secondary-default'],
        borderRightColor: COLORS['secondary-default'],
        borderBottomColor: COLORS['secondary-default'],
        borderLeftColor: COLORS['secondary-default']
      },
      info: {
        backgroundColor: COLORS['info-default'],
        color: COLORS.white,
        infoTextColor: COLORS['info-default'],
        borderColor: COLORS['info-default'],
        borderTopColor: COLORS['info-default'],
        borderRightColor: COLORS['info-default'],
        borderBottomColor: COLORS['info-default'],
        borderLeftColor: COLORS['info-default']
      },
      success: {
        backgroundColor: COLORS['success-default'],
        color: COLORS.white,
        infoTextColor: COLORS['success-default'],
        borderColor: COLORS['success-default'],
        borderTopColor: COLORS['success-default'],
        borderRightColor: COLORS['success-default'],
        borderBottomColor: COLORS['success-default'],
        borderLeftColor: COLORS['success-default']
      },
      warning: {
        backgroundColor: COLORS['warning-default'],
        color: COLORS.white,
        infoTextColor: COLORS['warning-default'],
        borderColor: COLORS['warning-default'],
        borderTopColor: COLORS['warning-default'],
        borderRightColor: COLORS['warning-default'],
        borderBottomColor: COLORS['warning-default'],
        borderLeftColor: COLORS['warning-default']
      },
      danger: {
        backgroundColor: COLORS['danger-default'],
        color: COLORS.white,
        infoTextColor: COLORS['danger-default'],
        borderColor: COLORS['danger-default'],
        borderTopColor: COLORS['danger-default'],
        borderRightColor: COLORS['danger-default'],
        borderBottomColor: COLORS['danger-default'],
        borderLeftColor: COLORS['danger-default']
      },
      white: {
        backgroundColor: COLORS.white,
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: COLORS.white,
        borderTopColor: COLORS.white,
        borderRightColor: COLORS.white,
        borderBottomColor: COLORS.white,
        borderLeftColor: COLORS.white
      },
      black: {
        backgroundColor: COLORS.black,
        color: COLORS.white,
        infoTextColor: COLORS.black,
        borderColor: COLORS.black,
        borderTopColor: COLORS.black,
        borderRightColor: COLORS.black,
        borderBottomColor: COLORS.black,
        borderLeftColor: COLORS.black
      },
      grey: {
        backgroundColor: COLORS['grey-t-7'],
        color: COLORS.white,
        infoTextColor: COLORS['grey-t-4'],
        borderColor: COLORS['grey-t-7'],
        borderTopColor: COLORS['grey-t-7'],
        borderRightColor: COLORS['grey-t-7'],
        borderBottomColor: COLORS['grey-t-7'],
        borderLeftColor: COLORS['grey-t-7']
      },
      lightGrey: {
        backgroundColor: COLORS['grey-8'],
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-8'],
        borderColor: COLORS['grey-8'],
        borderTopColor: COLORS['grey-8'],
        borderRightColor: COLORS['grey-8'],
        borderBottomColor: COLORS['grey-8'],
        borderLeftColor: COLORS['grey-8']
      },
      transparent: {
        backgroundColor: 'transparent',
        color: COLORS['grey-t-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
      },
      transparentPrimary: {
        backgroundColor: 'transparent',
        color: COLORS['primary-default'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
      },
      transparentDanger: {
        backgroundColor: 'transparent',
        color: COLORS['danger-default'],
        infoTextColor: COLORS['danger-default'],
        borderColor: COLORS['danger-default'],
        borderTopColor: COLORS['danger-default'],
        borderRightColor: COLORS['danger-default'],
        borderBottomColor: COLORS['danger-default'],
        borderLeftColor: COLORS['danger-default']
      },
      transparentWhite: {
        backgroundColor: 'transparent',
        color: COLORS.white,
        infoTextColor: COLORS.white,
        borderColor: COLORS.white,
        borderTopColor: COLORS.white,
        borderRightColor: COLORS.white,
        borderBottomColor: COLORS.white,
        borderLeftColor: COLORS.white
      },
      transparentDark: {
        backgroundColor: 'transparent',
        color: COLORS['grey-4'],
        infoTextColor: COLORS['grey-t-5'],
        borderColor: 'transparent',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent'
      }
    }
  }
}

const theme = {
  CORE,
  EXTENSIONS
}

export default theme

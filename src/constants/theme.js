import { createTheme, responsiveFontSizes } from '@mui/material'

import colors from './colors'
import values from './values'

let customTheme = createTheme({
  components: {
    // SORTED ALPHABETICALLY
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: 14,
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
          },
          '& input[type=number]': {
            MozAppearance: 'textfield'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 14,
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
          },
          '& input[type=number]': {
            MozAppearance: 'textfield'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 14,
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none'
          },
          '& input[type=number]': {
            MozAppearance: 'textfield'
          }
        }
      }
    }
  },
  palette: {
    default: colors.default,
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: {
      default: '#EEEEEE',
      secondary: colors.background.secondary,
      dark: colors.darkBackground.main
    }
  },
  spacing: 1,
  typography: {
    fontFamily: values.fontFamilyRoboto
  }
})

customTheme = responsiveFontSizes(customTheme)

export default customTheme

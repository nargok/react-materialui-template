import { createMuiTheme, colors, Theme } from '@material-ui/core'
import shadows from './shadows'
import typography from './typography'

const theme  = createMuiTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#5664d2'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    },
  },
  typography
})

// see https://bleepcoder.com/ja/material-ui/257868204/cannot-remove-shadows-when-defining-a-custom-theme
theme.shadows = shadows as unknown as Theme["shadows"]

export default theme
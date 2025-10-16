import { alpha } from '@mui/material/styles'
import MuiGlobalStyles from '@mui/material/GlobalStyles'

import values from 'src/constants/values'

const GlobalStyles = () => {
  return (
    <MuiGlobalStyles
      styles={() => ({
        // ALL ELEMENTS
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          fontFamily: values.fontFamilyRoboto,
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          imageRendering: 'optimizeQuality',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          pageBreakInside: 'avoid'
        },

        // SCROLLBAR
        '&::-webkit-scrollbar': {
          width: 5,
          height: 5,
          backgroundColor: alpha('#000000', 0.16)
        },
        '&::-webkit-scrollbar-thumb': {
          width: 5,
          height: 5,
          backgroundColor: alpha('#000000', 0.2)
        }
      })}
    />
  )
}

export default GlobalStyles

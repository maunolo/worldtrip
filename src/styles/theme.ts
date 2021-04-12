import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
})

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#47585B',
      '500': '#999999',
      '200': '#DADADA',
      '100': '#F5F8FA'
    },
    yellow: {
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700'
      },
      '*': {
        wordWrap: 'normal'
      }
    }
  },
  breakpoints
})

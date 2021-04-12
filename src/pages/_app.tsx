import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { ContinentsProvider } from '../hooks/useContinents'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import '../styles/slider.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContinentsProvider>
        <Component {...pageProps} />
      </ContinentsProvider>
    </ChakraProvider>
  )
}

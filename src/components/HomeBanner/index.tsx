import { Flex, Box } from '@chakra-ui/react'
import { Airplane } from './Airplane'
import { Heading } from './Heading'

export function HomeBanner() {
  return (
    <Box
      bgImage="url('/banner/background.png')"
      bgPosition="top"
      bgSize={['cover', 'cover', 'auto']}
      bgRepeat="no-repeat"
      h={['163px', '255px', '368px']}
      maxW={1440}
      overflow="hidden"
      mx="auto"
      w="100%"
    >
      <Flex
        w="100%"
        px={['4', '16', '36']}
        pt={['7', '10', '20']}
        justifyContent="space-between"
        overflowY="visible"
      >
        <Heading />
        <Airplane />
      </Flex>
    </Box>
  )
}

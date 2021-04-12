import { Box, Text } from '@chakra-ui/react'

export function Heading() {
  return (
    <Box mr={['0', '0', '8']}>
      <Text
        as="h1"
        w="100%"
        fontWeight="medium"
        fontSize={['xl', '3xl', '4xl']}
        lineHeight={['7', '10', '56px']}
        color="gray.100"
      >
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text
        as="p"
        w={['100%', '420px', '524px']}
        fontWeight="normal"
        fontSize={['sm', 'lg', 'xl']}
        lineHeight={['5', '7']}
        color="gray.200"
        mt={['3', '5']}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
  )
}

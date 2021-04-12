import { Text } from '@chakra-ui/react'

export function Heading() {
  return (
    <Text
      as="h1"
      fontSize={['xl', '2xl', '3xl']}
      lineHeight={['7', '10', '3.375rem']}
      fontWeight="medium"
      textAlign="center"
      mb={['5', '8', '14']}
    >
      Vamos nessa?
      <br />
      Então escolha seu continente
    </Text>
  )
}

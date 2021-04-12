import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1440}
      w="100%"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      h={['50px', '75px', '100px']}
    >
      <Image src="/logo.svg" alt="Logo" h={['20px', '30px', '45px']}></Image>
    </Flex>
  )
}

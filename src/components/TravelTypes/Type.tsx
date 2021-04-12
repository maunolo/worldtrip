import { Flex, Image, Text, useBreakpointValue, Box } from '@chakra-ui/react'

interface TypeProps {
  src: string
  alt: string
  text: string
}

export function Type({ src, alt, text }: TypeProps) {
  const largeWindow = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  })

  if (largeWindow) {
    return (
      <Flex direction="column" justifyContent="center" align="center">
        <Image src={src} alt={alt} color="yellow.500" fontSize="7xl" />
        <Text
          as="h2"
          color="gray.700"
          fontSize={largeWindow ? '2xl' : 'lx'}
          fontWeight="semibold"
          lineHeight="9"
          mt="6"
        >
          {`${text}`}
        </Text>
      </Flex>
    )
  } else {
    return (
      <Flex align="center" mt={['6', '8', '10']} px={['2', '4', '6']}>
        <Image
          src="/travelTypes/ellipse.svg"
          alt="."
          color="yellow.500"
          h={['2', '3']}
          mr={['3', '4']}
        />
        <Text
          as="h2"
          color="gray.700"
          fontSize={['lg', '2xl']}
          fontWeight="semibold"
          lineHeight={['7', '8']}
          whiteSpace="nowrap"
        >
          {`${text}`}
        </Text>
      </Flex>
    )
  }
}

import { Flex, Text } from '@chakra-ui/react'

interface HeadingProps {
  title: string
}

export function Heading({ title }: HeadingProps) {
  return (
    <Flex
      maxW="7xl"
      w="full"
      mx="auto"
      justifyContent={['center', 'flex-start']}
      align={['center', 'flex-end']}
    >
      <Text
        color="gray.100"
        fontSize={['3xl', '4xl', '5xl']}
        lineHeight={['10', '3rem', '4.5rem']}
        fontWeight="semibold"
        mb={['0', '10', '16']}
        ml={['0', '16', '16']}
      >
        {title}
      </Text>
    </Flex>
  )
}

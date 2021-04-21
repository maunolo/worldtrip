import { Flex, Text } from '@chakra-ui/react'

interface DescriptionProps {
  text: string
}

export function Description({ text }: DescriptionProps) {
  return (
    <Flex
      maxW={['', '', '600px']}
      w="full"
      ml={['4', '16', '16']}
      mr={['4', '16', '0']}
    >
      <Text
        fontSize={['sm', 'lg', '2xl']}
        align="justify"
        lineHeight={['5', '7', '9']}
        fontWeight="normal"
      >
        {text}
      </Text>
    </Flex>
  )
}

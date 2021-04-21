import { Flex } from '@chakra-ui/react'
import { Item } from './Item'

interface InfoProps {
  countryCount: number
  languageCount: number
  visitedCityCount: number
}

export function Info({
  countryCount,
  languageCount,
  visitedCityCount
}: InfoProps) {
  return (
    <Flex
      align="center"
      justify={['space-between']}
      maxW={['', '', '490px']}
      w="full"
      ml={['4', '16', '16']}
      mr={['4', '16', '0']}
    >
      <Item count={countryCount} label="países" />
      <Item count={languageCount} label="línguas" />
      <Item count={visitedCityCount} label="cidades +100" tooltip={true} />
    </Flex>
  )
}

import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Type } from './Type'

export function TravelTypes() {
  const typesJustifyContent = useBreakpointValue({
    base: 'space-around',
    lg: 'space-between'
  })

  return (
    <Flex
      justifyContent={typesJustifyContent}
      maxW={[1000, 1000, 1160]}
      mx="auto"
      mt={['3', '8', '20']}
      px={['10', '14', '20']}
      wrap="wrap"
    >
      <Type
        src="/travelTypes/cocktail.svg"
        alt="cocktail"
        text="vida noturna"
      />
      <Type src="/travelTypes/surf.svg" alt="surf" text="praia" />
      <Type src="/travelTypes/building.svg" alt="building" text="moderno" />
      <Type src="/travelTypes/museum.svg" alt="museum" text="clássico" />
      <Type src="/travelTypes/earth.svg" alt="earth" text="e mais..." />
    </Flex>
  )
}

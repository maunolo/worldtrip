import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { VisitedCity } from '../../types'
import { CityCard } from './CityCard'

interface VisitedCitiesProps {
  cities: VisitedCity[]
}

export function VisitedCities({ cities }: VisitedCitiesProps) {
  return (
    <Flex
      maxW="7xl"
      w="full"
      mx="auto"
      mt={['6', '10', '16']}
      mb={['4', '6', '8']}
    >
      <Flex mx={['4', '16', '16']} w="full" direction="column">
        <Text
          as="h1"
          mb={['4', '8', '10']}
          fontSize={['xl', '2xl', '3xl']}
          color="gray.700"
          fontWeight="medium"
        >
          Cidades +100
        </Text>
        <SimpleGrid
          w="full"
          gridRowGap="10"
          gridColumnGap="10"
          minChildWidth="256px"
          justifyContent="space-between"
          justifyItems="center"
        >
          {cities.map(city => (
            <CityCard city={city} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

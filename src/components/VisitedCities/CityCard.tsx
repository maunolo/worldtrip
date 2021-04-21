import { Flex, Image, Text, Box } from '@chakra-ui/react'
import { VisitedCity } from '../../types'

interface CityCardProps {
  city: VisitedCity
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Flex maxW="256px" w="full" h="279px" direction="column">
      <Image
        borderRadius="4px 4px 0px 0px"
        src={city.img}
        alt={city.name}
        h="173px"
      />
      <Flex
        borderWidth="1px"
        borderStyle="solid"
        borderRadius="0 0 4px 4px"
        borderColor="yellow.500"
        borderTopWidth="0"
        w="full"
        h="full"
        justify="space-between"
      >
        <Flex direction="column" pl="6" pt="6">
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color="gray.700"
            mb="3"
            lineHeight="1"
          >
            {city.name}
          </Text>
          <Text fontSize="md" fontWeight="medium" color="gray.500">
            {city.countryName}
          </Text>
        </Flex>
        <Flex align="center" pr="6">
          <Box
            w="30px"
            h="30px"
            bgImg={`url(${city.countryImg})`}
            bgPos="center"
            bgSize="30px 30px"
            bgRepeat="no-repeat"
            borderRadius="100%"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

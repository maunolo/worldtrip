import { Flex } from '@chakra-ui/react'
import { Continent } from '../../types'
import { Description } from './Description'
import { Heading } from './Heading'
import { Info } from './Info'

interface ContinentBannerProps {
  continent: Continent
}

export function ContinentBanner({ continent }: ContinentBannerProps) {
  return (
    <>
      <Flex
        bgImage={`url(${continent.bannerImg})`}
        bgPosition="top"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={['150px', '350px', '500px']}
        maxW="8xl"
        overflow="hidden"
        mx="auto"
        w="full"
      >
        <Heading title={continent.name} />
      </Flex>
      <Flex
        wrap="wrap"
        maxW="7xl"
        mx="auto"
        mt={['6', '10', '20']}
        justifyContent={['start', 'start', 'start']}
      >
        <Description text={continent.description} />
        <Info
          countryCount={continent.countryCount}
          languageCount={continent.languageCount}
          visitedCityCount={continent.visitedCityCount}
        />
      </Flex>
    </>
  )
}

import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Continent } from '../../types'

interface CarouselItemProps {
  continent: Continent
}

export function CarouselItem({ continent }: CarouselItemProps) {
  return (
    <Link href={`/continents/${continent.slug}`}>
      <Flex
        backgroundImage={`url(${continent.bannerImg})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        cursor="pointer"
        w="100%"
        h={['250px', '350px', '450px']}
        direction="column"
        align="center"
      >
        <Text
          as="h1"
          fontWeight="bold"
          fontSize={['4xl', '2.75rem', '5xl']}
          color="gray.100"
          lineHeight={['10', '3.5rem', '4.5rem']}
          mt={[90, 130, 180]}
          mb={['2', '3', '4']}
        >
          {continent.name}
        </Text>
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={['lg', 'xl', '2xl']}
          color="gray.200"
          lineHeight={['4', '5', '6']}
        >
          {continent.phrase}
        </Text>
      </Flex>
    </Link>
  )
}

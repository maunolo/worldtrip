import { Divider } from '@chakra-ui/react'
import { HomeBanner } from '../components/HomeBanner'
import { Header } from '../components/Header'
import { CarouselSection } from '../components/CarouselSection'
import { TravelTypes } from '../components/TravelTypes'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../services/prismic'
import Prismic from '@prismicio/client'
import { Continent } from '../types'
import { useContinents } from '../hooks/useContinents'

interface HomeProps {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {
  const { setContinents } = useContinents()

  setContinents(continents)

  return (
    <>
      <Header />
      <HomeBanner />
      <TravelTypes />
      <Divider
        borderColor="gray.700"
        w="90px"
        mx="auto"
        mt={['9', '14', '20']}
        mb={['7', '10', '14']}
        borderBottomWidth="2px"
      />
      <CarouselSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const continentsResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')],
    {
      fetch: ['continent.name', 'continent.phrase', 'continent.banner_img'],
      pageSize: 10
    }
  )

  const continents = continentsResponse.results.map(continent => ({
    slug: continent.uid,
    name: continent.data.name,
    phrase: continent.data.phrase,
    bannerImg: continent.data.banner_img.url
  }))

  return {
    props: {
      continents
    },
    revalidate: 60 * 30 // 30 minutes
  }
}

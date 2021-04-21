import { GetStaticPaths, GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import { Continent } from '../../types'
import { Header } from '../../components/Header'
import { useContinents } from '../../hooks/useContinents'
import { ContinentBanner } from '../../components/ContinentBanner'
import { VisitedCities } from '../../components/VisitedCities'

interface ContinentProps {
  continent: Continent
}

export default function ContinentPage({ continent }: ContinentProps) {
  return (
    <>
      <Header withReturnButton />
      <ContinentBanner continent={continent} />
      <VisitedCities cities={continent.visitedCities} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  const prismic = getPrismicClient()

  const continentResponse = await prismic.getByUID(
    'continent',
    String(slug),
    {}
  )

  const visitedCitiesResponse = await prismic.query(
    [
      Prismic.Predicates.at('document.type', 'visitedcity'),
      Prismic.Predicates.at(
        'my.visitedcity.continent_link',
        continentResponse.id
      )
    ],
    {
      fetch: [
        'visitedcity.name',
        'visitedcity.img',
        'visitedcity.country_img',
        'visitedcity.country_name'
      ],
      pageSize: 100
    }
  )

  const visitedCities = visitedCitiesResponse.results.map(city => ({
    slug: city.uid,
    name: city.data.name,
    img: city.data.img.url,
    countryImg: city.data.country_img.url,
    countryName: city.data.country_name
  }))

  const continent = {
    name: continentResponse.data.name,
    bannerImg: continentResponse.data.banner_img.url,
    countryCount: continentResponse.data.country_count,
    description: continentResponse.data.description,
    languageCount: continentResponse.data.language_count,
    visitedCityCount: continentResponse.data.visited_city_count,
    visitedCities
  }

  return {
    props: {
      continent
    },
    revalidate: 60 * 30 // 30 minutes
  }
}

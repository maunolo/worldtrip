export type VisitedCity = {
  name: string
  img: string
  countryImg: string
  countryName: string
}

export type Continent = {
  slug: string
  name: string
  phrase: string
  bannerImg: string
  countryCount: number
  description: string
  languageCount: number
  visitedCityCount: number
  visitedCities: VisitedCity[]
}

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Box } from '@chakra-ui/react'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { CarouselItem } from './CarouselItem'
import { useContinents } from '../../hooks/useContinents'
SwiperCore.use([Navigation, Pagination, A11y])

export function Carousel() {
  const { continents } = useContinents()

  return (
    <Box maxW={1240} mx="auto" mb={['5', '7', '10']}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, type: 'bullets' }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {continents.map(continent => (
          <SwiperSlide>
            <CarouselItem continent={continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

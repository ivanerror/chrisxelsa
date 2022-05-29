import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import './SwiperLandscape.css'

export default function SwiperPotrait (props) {
  const { pathList } = props

  return (
    <>
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper-landscape"
      >
        {pathList.map((x, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="rounded-xl" src={`/img/slideshow/${x}`} />;
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

SwiperPotrait.propTypes = {
  pathList: PropTypes.array.isRequired
}

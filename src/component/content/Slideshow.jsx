import React from 'react'

import { SlidePathLandscape, SlidePathPotrait } from '../../constant'
import SwiperPotrait from './Swiper/Potrait/SwiperPotrait'
import SwiperLandscape from './Swiper/Landscape/SwiperLandscape'

export default function Slideshow () {
  return (
    <div className="min-h-screen">
      <SwiperPotrait pathList={SlidePathPotrait} />
      <SwiperLandscape pathList={SlidePathLandscape} />
    </div>
  )
}

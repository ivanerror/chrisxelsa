import React from 'react'

import { SlidePathLandscape } from '../../constant'
import SwiperLandscape from './Swiper/Landscape/SwiperLandscape'

export default function Slideshow () {
  return (
    <div>
      {/* <SwiperPotrait pathList={SlidePathPotrait} /> */}
      <SwiperLandscape pathList={SlidePathLandscape} />
    </div>
  )
}

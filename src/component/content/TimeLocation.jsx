import React from 'react'
import Countdown from '../common/Countdown'
import { useCountdown } from '../common/utils/useCountdown'
import GoogleMaps from '../GoogleMaps'
import PropTypes from 'prop-types'

export default function TimeLocation () {
  const title = "We're Getting Married"

  return (
    <div className="flex flex-col mt-10 items-center">
      <div className="font-Century text-white text-2xl text-center">
        {title}
      </div>
      <div className="text-3xl text-center font-AlexBrush text-emas-asyik">
        Countdown Timer
      </div>
      <CountdownTimer className="mt-4" dueDate={new Date('07/10/2022 17:00')} />
      <div className="font-Century text-white text-2xl text-center py-4">
        Location
      </div>
      <GoogleMaps
        className="flex justify-center"
        lat={-8.07375035064174}
        lng={111.9045955200124}
        getDirectionUrl="https://www.google.com/maps/place/Crown+Victoria+Hotel/@-8.0737392,111.9024038,17z/data=!3m1!4b1!4m8!3m7!1s0x2e78e2e33e8320df:0xa675321a9341eba!5m2!4m1!1i2!8m2!3d-8.0737445!4d111.9045925"
      />
    </div>
  )
}

const CountdownTimer = (props) => {
  const { dueDate } = props

  const [days, hours, minutes, seconds] = useCountdown(dueDate)

  const isDueDate = (count) => {
    if (count < 0) {
      return 0
    }
    return count
  }

  return (
    <div className="flex lg:gap-6 gap-2 my-4">
      <Countdown count={isDueDate(days)} timeProperties={'Days'} />
      <Countdown count={isDueDate(hours)} timeProperties={'Hours'} />
      <Countdown count={isDueDate(minutes)} timeProperties={'Mins'} />
      <Countdown count={isDueDate(seconds)} timeProperties={'Secs'} />
    </div>
  )
}

CountdownTimer.propTypes = {
  dueDate: PropTypes.instanceOf(Date).isRequired
}

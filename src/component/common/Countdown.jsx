import React from 'react'
import PropTypes from 'prop-types'

export default function Countdown ({ count, timeProperties }) {
  return (
    <div className="border-4 p-4 border-emas-asyik w-20 rounded-2xl flex flex-col items-center">
      <div className="text-emas-asyik font-Century text-4xl">{count}</div>
      <div className="text-emas-asyik font-Century text-xl">
        {timeProperties}
      </div>
    </div>
  )
}

Countdown.propTypes = {
  count: PropTypes.number.isRequired,
  timeProperties: PropTypes.string.isRequired
}

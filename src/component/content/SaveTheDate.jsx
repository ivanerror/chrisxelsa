import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SaveTheDate () {
  const [searchParams] = useSearchParams()

  const time = searchParams.get('time')

  return (
    <>
      <div className="flex items-center flex-col relative min-h-screen">
        <img
          className="w-2/3 mt-10 lg:w-1/2"
          src="/img/savetodate.png"
          alt=""
        />
        <div className="relative">
          {/* Date */}
          <div className="flex text-white items-center gap-4">
            <div className="text-4xl font-Century">SUN</div>
            <img src="/img/Rect-divider.png" alt="" />
            <div className="font-Century flex flex-col items-center">
              <div className="text-2xl">JULY</div>
              <div className="text-5xl">10</div>
            </div>
            <img src="/img/Rect-divider.png" alt="" />
            <div className="text-4xl font-Century">2022</div>
          </div>
        </div>

        {time === 'free' && (
          <div className="font-Century text-2xl text-white tracking-wider">
            17.00 - End
          </div>
        )}

        {time === '17' && (
          <div className="font-Century text-2xl text-white tracking-wider">
            17.00 - 18.00
          </div>
        )}

        {time === '18' && (
          <div className="font-Century text-2xl text-white tracking-wider">
            18.00 - 19.00
          </div>
        )}

        <div className="font-Century text-md text-emas-asyik tracking-wider">
          Crown Victoria Hotel, Tulungagung
        </div>
        <img
          className="absolute left-0 -bottom-20"
          src="/img/aksen-kiri-content.png"
          alt=""
        />
        <img
          className="absolute right-0 bottom-0"
          src="/img/left-flower.png"
          alt=""
          Y
        />
      </div>
    </>
  )
}

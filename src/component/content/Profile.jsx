import React from 'react'

export default function profile () {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <img className="p-4 lg:w-2/3 mt-4" src="/img/foto-2.png" alt="" />
        </div>
        <div className="flex flex-col md:mx-20">
          <div className="ml-4">
            <div className="font-AlexBrush text-emas-asyik text-4xl">
              Christian Tiodinata
            </div>
            <div className="font-Century text-white leading-5 px-2">
              Putra pertama dari keluarga <br />
              Bapak Djoko Rachmadi (Wempi) dan Ibu Lusy Mehantini
            </div>
          </div>
        </div>
        <div className="flex justify-center md:mt-10 sm:mt-4">
          <img className="w-24" src="/img/and.png" alt="" />
        </div>
        <div className="text-right mr-4  md:mx-20">
          <div className="font-AlexBrush text-emas-asyik text-4xl">
            Elsa Tri Utari
          </div>
          <div className="font-Century text-white leading-5 px-2">
            Putri pertama dari keluarga <br />
            Bapak H. Ahmad (Alm) dan Ibu Lisnawati
          </div>
        </div>

        <div className="px-2 lg:px-8">
          <div className="font-Century text-emas-asyik text-xl text-center mt-10">
            Kebahagian kami akan sempurna <br /> dengan kehadiran Bapak / Ibu /
            Saudara / i
          </div>
          <div className="font-Century text-white text-sm italic text-center mt-4 px-2">
            &quot;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu,
            apa yang telah dipersatukan Allah tidak boleh diceraikan
            manusia&quot;
          </div>
          <div className="font-Century text-white text-md text-center mt-4">
            ~ Matius 19:6 ~
          </div>
        </div>
      </div>
    </>
  )
}

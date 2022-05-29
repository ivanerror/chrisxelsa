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
            <div className="font-Century text-white leading-5">
              Putra pertama dari keluarga <br />
              Bapak ... dan Ibu ...
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="w-24" src="/img/and.png" alt="" />
        </div>
        <div className="text-right mr-4  md:mx-20">
          <div className="font-AlexBrush text-emas-asyik text-4xl">
            Elsa Triutari
          </div>
          <div className="font-Century text-white leading-5">
            Putri pertama dari keluarga <br />
            Bapak ... dan Ibu ...
          </div>
        </div>

        <div className="px-2 lg:px-8">
          <div className="font-Century text-emas-asyik text-xl text-center mt-10">
            LAGI FOKUS MAU NAMBAH ISTRI
          </div>
          <div className="font-Century text-white text-sm text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            provident earum quaerat natus quos adipisci voluptatibus odit et
            deserunt optio.
          </div>
        </div>
      </div>
    </>
  )
}

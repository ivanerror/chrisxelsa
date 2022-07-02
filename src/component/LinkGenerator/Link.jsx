import React, { useState } from 'react'
import { songPath } from '../../constant'
import { QRCodeCanvas } from 'qrcode.react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Link () {
  const [name, setName] = useState('')
  const song = Object.entries(songPath).map(([key, value]) => ({ key, value }))
  const [songSelected, setSongSelected] = useState(song[0].key)
  const [timeSelected, setTimeSelected] = useState('17')
  const [uriGenarated, setUriGenarated] = useState(
    `${window.location.protocol}//${window.location.host}/`
  )

  const handleChange = (e) => {
    setSongSelected(e.target.value)
  }

  const handleGenerate = () => {
    const uri = `${window.location.protocol}//${
      window.location.host
    }/?time=${timeSelected}&user=${songSelected}&name=${encodeURIComponent(
      name
    )}`
    setUriGenarated(uri)
    const sambutan = `Selamat malam  Bapak/Ibu/Saudara/i *${name}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara syukuran putra-putri kami :

*Christian Tiodinata  & Elsa Tri Utari*
    
Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :
${uri}
    
Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
    
Terima Kasih.`

    navigator.clipboard.writeText(sambutan)

    toast.success(`${name} 💌 Generated`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  const handleOptionChange = (event) => {
    setTimeSelected(event.target.value)
  }

  return (
    <div className="container flex flex-col items-center mx-auto mt-10 text-lg">
      <label htmlFor="time">Select Time</label>
      <label>
        <input
          type="radio"
          value="17"
          id="time"
          checked={timeSelected === '17'}
          onChange={handleOptionChange}
        />
        17.00 - 18.00
      </label>
      <label>
        <input
          type="radio"
          value="18"
          id="time"
          checked={timeSelected === '18'}
          onChange={handleOptionChange}
        />
        18.00 - 19.00
      </label>
      <label>
        <input
          type="radio"
          value="free"
          id="time"
          checked={timeSelected === 'free'}
          onChange={handleOptionChange}
        />
        17.00 - End
      </label>
      <label htmlFor="">Song Option</label>
      <select
        name="song"
        id="cars"
        onChange={handleChange}
        className="border-2"
      >
        {song.map((x, index) => {
          return (
            <option key={index} value={x.key}>
              {x.key}
            </option>
          )
        })}
      </select>
      <label htmlFor="">Name</label>
      <input
        required
        type="text"
        className="border-2"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGenerate} className="bg-orange-200 p-4 mt-4">
        Generate & Copy
      </button>
      <a href={uriGenarated}>{uriGenarated}</a>
      <QRCodeCanvas value={uriGenarated} />,
      <ToastContainer position="t" />
    </div>
  )
}

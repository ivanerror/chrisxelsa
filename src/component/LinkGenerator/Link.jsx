import React, { useState } from 'react'
import { songPath } from '../../constant'
import { QRCodeCanvas } from 'qrcode.react'

export default function Link () {
  const [name, setName] = useState('')
  const song = Object.entries(songPath).map(([key, value]) => ({ key, value }))
  const [songSelected, setSongSelected] = useState(song[0].key)
  const [uriGenarated, setUriGenarated] = useState(
    `${window.location.protocol}//${window.location.host}/`
  )

  const handleChange = (e) => {
    setSongSelected(e.target.value)
  }

  const handleGenerate = () => {
    const uri = `${window.location.protocol}//${
      window.location.host
    }/?user=${songSelected}&name=${encodeURIComponent(name)}`
    setUriGenarated(uri)
    navigator.clipboard.writeText(uri)
  }

  return (
    <div className="container flex flex-col items-center mx-auto mt-10">
      <label htmlFor="">Song Option</label>
      <select
        name="song"
        id="cars"
        onChange={handleChange}
        className="border-2"
      >
        {song.map((x, index) => {
          return <option key={index} value={x.key}>{x.key}</option>
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

      <div>{uriGenarated}</div>
      <QRCodeCanvas value={uriGenarated} />,
    </div>
  )
}

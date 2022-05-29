import React from 'react'
import GoogleMaps from './GoogleMap/GoogleMaps'
import Button from '../common/Button'
import PropTypes from 'prop-types'

export default function Maps (props) {
  const { getDirectionUrl, lat, lng } = props

  const center = {
    lat,
    lng
  }

  const handleGetDirection = () => {
    window.open(getDirectionUrl)
  }

  return (
    <>
      <div className="p-4 container">
        <GoogleMaps center={center} />
      </div>
      <div className="my-4">
        <Button onClick={handleGetDirection} label={'Buka Peta'} />
      </div>
    </>
  )
}

Maps.propTypes = {
  getDirectionUrl: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
}

Maps.defaultProps = {
  getDirectionUrl: '',
  lat: 0,
  lng: 0
}

// export default Maps;

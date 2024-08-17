import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="danger">Current Location</Button>
      <Button variant="danger">BBO</Button>
      <Button variant="danger">NANA</Button>
    </div>
  )
}

export default WeatherButton

import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({changeCity, cities, selectedCity}) => {
  console.log("cities", cities)
  

  return (
    <div>
      <Button variant={`${selectedCity == null?"danger":"warning"}`} onClick={()=> changeCity("current")}>Current Location</Button>
      
      {cities.map((city)=>(
        <Button variant={`${selectedCity == city ?"danger":"warning"}`} onClick={()=>changeCity(city)} >{city}</Button>
      ))}
    </div>
  )
}

export default WeatherButton

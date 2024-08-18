import './App.css';
import { useEffect} from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';
import WeatherBox from './component/WeatherBox';
import ClockLoader from "react-spinners/ClockLoader"

function App() {

  const [weather, setWeather] = useState(null);

  const [city, setCity] = useState("")

  const [loading, setLoading] = useState(false)

  const cities = ['paris', 'new york', 'tokyo', 'seoul']

  const getCurrentLocation = () => {
    
    navigator.geolocation.getCurrentPosition((position) => {
      
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude)
      getWeather(latitude, longitude);
    });
  };
  
  const getWeather = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&APPID=a346b07ac14a6b049d3b7d20d269e087&units=metric`;
    setLoading(true)
    const response = await fetch(url);
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    
  };

  const getWeatherByCity= async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?&q=${city}&APPID=a346b07ac14a6b049d3b7d20d269e087&units=metric`;
    setLoading(true)
    const response = await fetch(url);
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
    
  }

  const changeCity=(city)=>{
    if(city==="current"){
      setCity(null)
    }else{
      setCity(city);
    }
  }

  useEffect(() => {
    if(city == null){
      getCurrentLocation();
    }else{
    getWeatherByCity();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
      <div className="container">
        <ClockLoader color="#f88c6b" loading={loading} />
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} selectedCity={city} changeCity={changeCity}/>
      </div>
  );
}

export default App;
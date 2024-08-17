import './App.css';
import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';
import WeatherBox from './component/WeatherBox';

function App() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getCurrentLocation();
  }, []);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  };
  const getWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a346b07ac14a6b049d3b7d20d269e087`;

    const response = await fetch(url);
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
  );
}

export default App;
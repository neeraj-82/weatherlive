import React, { useState } from 'react';
import Form from './Form';

import Weather from './Weather';

const key="2f3250d486ae0180e17ae3c0a1aa029b";

const Main=()=>{

  
  const[weather,set_weather]=useState(
  {
    temp:undefined,
    city:undefined,
    country:undefined,
    description:undefined,
    humidity:undefined,
    wind:undefined,
    error:undefined,
  }
   

  );
  const getWeather=async(e)=>
  {
    e.preventDefault();
    let city=e.target.city.value;
    let country=e.target.country.value;
    
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`);
    const data=await api_call.json();

    console.log(data);
    if(city&&country)
    {
      set_weather(
      {
        temp:data.main.temp,
        city:data.name,
        country:data.sys.country,
        description:data.weather[0].description,
        humidity:data.main.humidity,
        wind:data.wind.speed,
      }
      );
    }
    else{
      set_weather(
      {
        temp:undefined,
        city:undefined,
        country:undefined,
        description:undefined,
        error:'please enter detail',
      }
      ); 
    }
  }
  return(
    <>

   
     
    
      
    <section className="weather_section">
     
      <div className="area">
          <Form
            getWeather={getWeather}
          />
          <Weather
                temprature={weather.temp}
                city={weather.city}
                country={weather.country}
                description={weather.description}
                humidity={weather.humidity}
                wind={weather.wind}
                error={weather.error}
            />
      
        </div>
     
    </section>
     
     
    </>
  )
}
export default Main;

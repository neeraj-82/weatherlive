import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const Weather =(props)=>
{
    return(
        <>
        <main>
            <div className="temp">
                <div className="location">
                {props.error && <p>{props.error}</p>} 
                {props.city  && props.country && <p><LocationOnIcon className="icon"/>{props.city} - {props.country}</p>}
                </div>
                <div className="degree">
              
                     {props.temprature && <p>{Math.floor(props.temprature)}<sup>0</sup><span>C</span></p>}
                </div>
                <div className="report">
                    {props.description && <p>{props.description}</p>}
                </div>
            </div>
            <div className="detail">
                <div className="humidity">
                    <span className="hum">   {props.humidity && <p>Humidity : {props.humidity}</p>}</span>
                    <span className="wind">   {props.wind && <p>Wind speed :{props.wind}</p>}</span>
                    
                    
                </div>
                <div className="wind"></div>
            </div>
            
            
           
           
        </main>
       
    
        </>      
    )
}
export default Weather;
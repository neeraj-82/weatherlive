  
import React from 'react';

const Form=(props)=>
{

   
    return(
        <>
       
            <form onSubmit={props.getWeather}>
                <div className="city">
                    <input type="text" placeholder="city name...." name="city" autoComplete="off" /> 
                </div>
                <div className="country">
                    <input type="text" placeholder="country name..." name="country" autoComplete="off" />
                </div>
                <div className="show">
                    <button >Show</button>
                </div>
                {/* */}
                {/* */}
                {/*  */}
            </form>
        
           
        </>
    )
}
export default Form;
import React from 'react';
import {NavLink} from 'react-router-dom';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Intro=()=>
{
    return(
        <><section className="intro">
             <div className="card">
                <div className="img_box">
                   <CloudIcon className="img"/>
                   <WbSunnyIcon className="sun"/>
                  
                </div>
                <div className="content">
                    <h4>Check  Weather</h4>
                    <NavLink className="a" to="/Weather">Weather</NavLink>
                </div>
            </div>
        </section>
           
        </>
    )
}
export default Intro;
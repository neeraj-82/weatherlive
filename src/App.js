import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Main from './Main';
import Intro from './Intro';



    const App=()=>
    {
      return(
        <>
    
        <Switch>
          <Route exact path="/" component={Intro}/>
          <Route exact path='/Weather' component={Main}/>
        </Switch>
      
        
         
        </>
      )
    }


  
  


export default App;
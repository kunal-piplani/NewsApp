
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


   
    
   const App =()=> {
    const pageSize=30;
      const apiKey=process.env.REACT_NEWS_API_KEY ;
const [progress, setProgress] = useState(0);

    
       
        return (
         
          <div>
            <Router>
            <NavBar/>
            <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
            <Switch>
            <Route exact path="/General"><News setProgress={setProgress} apiKey={apiKey} key ="General" country="in" category ="General" pageSize={pageSize}/></Route>
            <Route exact path="/Business"><News setProgress={setProgress} apiKey={apiKey}  key ="Business" country="in" category ="Business" pageSize={pageSize}/></Route>
            <Route exact path="/Entertainment"><News setProgress={setProgress} apiKey={apiKey}  key ="Entertainment" country="in" category ="Entertainment" pageSize={pageSize}/></Route>
            <Route exact path="/Health"><News setProgress={setProgress} apiKey={apiKey}  key ="Health" country="in" category ="Health" pageSize={pageSize}/></Route>
            <Route exact path="/Science"><News setProgress={setProgress} apiKey={apiKey}  key ="Science" country="in" category ="Science" pageSize={pageSize}/></Route>
            <Route exact path="/Sports"><News setProgress={setProgress} apiKey={apiKey}  key ="Sports" country="in" category ="Sports" pageSize={pageSize}/></Route>
            <Route exact path="/Technology"><News setProgress={setProgress} apiKey={apiKey}  key ="Technology" country="in" category ="Technology" pageSize={pageSize}/></Route>

            </Switch>
            </Router>
          </div>
          
        )
      
    }
    

export default App;
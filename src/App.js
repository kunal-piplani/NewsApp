
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";



   
    
    export default class App extends Component {
     
      render() {
       
        return (
         
          <div>
            <Router>
            <NavBar/>
            <Switch>
            <Route exact path="/General"><News key ="General" country="in" category ="General" pageSize={30}/></Route>
            <Route exact path="/Business"><News key ="Business" country="in" category ="Business" pageSize={30}/></Route>
            <Route exact path="/Entertainment"><News key ="Entertainment" country="in" category ="Entertainment" pageSize={30}/></Route>
            <Route exact path="/Health"><News key ="Health" country="in" category ="Health" pageSize={30}/></Route>
            <Route exact path="/Science"><News key ="Science" country="in" category ="Science" pageSize={30}/></Route>
            <Route exact path="/Sports"><News key ="Sports" country="in" category ="Sports" pageSize={30}/></Route>
            <Route exact path="/Technology"><News key ="Technology" country="in" category ="Technology" pageSize={30}/></Route>

            </Switch>
            </Router>
          </div>
          
        )
      }
    }
    


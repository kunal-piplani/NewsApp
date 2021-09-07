
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
     pageSize=30
      render() {
       
        return (
         
          <div>
            <Router>
            <NavBar/>
            <Switch>
            <Route exact path="/General"><News key ="General" country="in" category ="General" pageSize={this.pageSize}/></Route>
            <Route exact path="/Business"><News key ="Business" country="in" category ="Business" pageSize={this.pageSize}/></Route>
            <Route exact path="/Entertainment"><News key ="Entertainment" country="in" category ="Entertainment" pageSize={this.pageSize}/></Route>
            <Route exact path="/Health"><News key ="Health" country="in" category ="Health" pageSize={this.pageSize}/></Route>
            <Route exact path="/Science"><News key ="Science" country="in" category ="Science" pageSize={this.pageSize}/></Route>
            <Route exact path="/Sports"><News key ="Sports" country="in" category ="Sports" pageSize={this.pageSize}/></Route>
            <Route exact path="/Technology"><News key ="Technology" country="in" category ="Technology" pageSize={this.pageSize}/></Route>

            </Switch>
            </Router>
          </div>
          
        )
      }
    }
    



import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


   
    
    export default class App extends Component {
     pageSize=30
     apiKey=process.env.REACT_NEWS_API_KEY 
     state={
progress:0,


     }
     setProgress=(progress)=>{
this.setState({progress:progress})


     }
      render() {
       
        return (
         
          <div>
            <Router>
            <NavBar/>
            <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
            <Switch>
            <Route exact path="/General"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="General" country="in" category ="General" pageSize={this.pageSize}/></Route>
            <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Business" country="in" category ="Business" pageSize={this.pageSize}/></Route>
            <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Entertainment" country="in" category ="Entertainment" pageSize={this.pageSize}/></Route>
            <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Health" country="in" category ="Health" pageSize={this.pageSize}/></Route>
            <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Science" country="in" category ="Science" pageSize={this.pageSize}/></Route>
            <Route exact path="/Sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Sports" country="in" category ="Sports" pageSize={this.pageSize}/></Route>
            <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key ="Technology" country="in" category ="Technology" pageSize={this.pageSize}/></Route>

            </Switch>
            </Router>
          </div>
          
        )
      }
    }
    


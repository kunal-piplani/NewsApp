
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';



   
    
    export default class App extends Component {
      c ="KP"
      render() {
       
        return (
          <div>
      <NavBar/>
      <News pageSize={30}/>
    
          </div>
        )
      }
    }
    



import { Component } from 'react';
import './App.css';
import bgv from "./imagesAndVideo/bgv.mp4";
import  ReviewComp from './Review/reviewComp';
import  Contactus from './ConatctUs/contactus.js';
import users from './Data';
import HomePage from './HomePage/HomePage';
import ProduitsPage from './produitsPage/produitsPage';





class App extends Component {

  render(){
    return (
      <div className="App">
          <ProduitsPage/>
      
      </div>
    );
  }
}

export default App;


import { Component } from 'react';
import './HomePage.css';
import bgv from "../imagesAndVideo/bgv.mp4";
import  ReviewComp from '../Review/reviewComp';
import  Contactus from '../ConatctUs/contactus.js';
import users from '../Data';



class HomePage extends Component {

  constructor(props){
    super(props);
    this.state={
      i:0
    }
  }


  onClickLeft=()=>{
    console.log("click left");
    const iOld=this.state.i;
    if(iOld === 0){
      this.setState({i:users.length-1});
    }else{
      this.setState({i:iOld-1});
    }
  }

  onClickRight=()=>{
    console.log("click right")
    const iOld=this.state.i;
    if(iOld === users.length-1){
      this.setState({i:0});
    }else{
      this.setState({i:iOld+1});
    }
  }

  onClickRanddom=()=>{
    console.log("click random")
    this.setState({i:1});
  }





  render(){
    return (
      <div className="HomePage">
        
        <menu className="HomePage-header">
        <video className="bg-video" muted loop autoPlay>
          <source src={bgv} type="video/mp4" />
        </video>
          <div className="menu-comp">
                <h1 className="disc_text">
                <span>Hi </span>, looking for your dream house !<br/> you are in the right place .
                </h1>
                <button className="btn_connect">Sign In</button>
          </div>
  
          <div className="house-comp">
                <div className="house1"> </div>
                <div className="house2"> </div>
                <div className="house3"> </div>
          </div>
        </menu>
        <div className="panel-service">
           <div className="service">
               <div className="service-img"></div>
              <p className="service-title"></p>
              <p className="service-number">100</p>
           </div>
           <div className="service">
              <div className="service-img"></div>
              <p className="service-title"></p>
              <p className="service-number">100</p>
           </div>
           <div className="service">
              <div className="service-img"></div>
              <p className="service-title"></p>
              <p className="service-number">100</p>
           </div>
  
        </div>
        {/* reviews */}
        
        <ReviewComp 
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
            onClickRanddom={this.onClickRanddom}
            user={users[this.state.i]}
            />


          {/* contact us */}
        <Contactus/>
      </div>
    );
  }
}

export default HomePage;

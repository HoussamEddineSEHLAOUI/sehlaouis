
import { Component } from 'react';
import './contactus.css';



class Contactus extends Component {

  constructor(props){
    super(props);
    this.state={
      i:0
    }
  }

  render(){
    return (
      <div className="Contactus">
        <div className="Contactus-comp-div"></div>
        <div className="Contactus-comp">
            
            <div className="Contactus-input">
                <label className="Contactus-label">Name :</label>
                <input className="Contactus-input-text" type="text"></input>
            </div>
            <div className="Contactus-input">
                <label className="Contactus-label">Email : </label>
                <input className="Contactus-input-text"
                 placeholder="xzy@gmail.com"
                 type="text"></input>
            </div>
            <div className="Contactus-input-comment">
                <textarea className="Contactus-input-comment-text" 
                    type="text"
                    placeholder="Votre message .."></textarea>
            </div>
            <button className="Contactus-submit" type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Contactus;

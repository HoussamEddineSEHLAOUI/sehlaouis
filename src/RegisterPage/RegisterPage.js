
import { Component } from 'react';
import './RegisterPage.css';



class RegisterPage extends Component {

  
  render(){
    return (
     <div className="page-RegisterPage">
        <div className="p-RegisterPage-card">
            <h3>Sign Up</h3>
            <div className="p-RegisterPage-E"> 
                <p >Name :</p>
                <input type="text" name="name" />
           </div>
           <div className="p-RegisterPage-E"> 
                <p >Email :</p>
                <input type="email" name="email" placeholder="xyz@gmail.com"/>
           </div>
           <div className="p-RegisterPage-E"> 
                 <p >password :</p>
                <input type="password" name="password" />
          </div>
          <div className="p-RegisterPage-E"> 
                 <p > conferm password :</p>
                <input type="password" name="passwordChek" />
          </div>
          <button type="submit">Sign Up</button>
        </div>
    </div>
    );
  }
}

export default RegisterPage;

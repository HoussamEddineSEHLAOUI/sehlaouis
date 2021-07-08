
import { Component } from 'react';
import './LoginPage.css';



class LoginPage extends Component {

  
  render(){
    return (
     <div className="page-LoginPage">
        <div className="p-LoginPage-card">
            <h3>Sign In</h3>
           <div className="p-LoginPage-E"> 
                <p >Email :</p>
                <input type="email" name="email" placeholder="xyz@gmail.com"/>
           </div>
           <div className="p-LoginPage-E"> 
                 <p >password :</p>
                <input type="password" name="password" />
          </div>
          <p>Forget password ?</p>
          <button type="submit">SignIn</button>
        </div>
    </div>
    );
  }
}

export default LoginPage;

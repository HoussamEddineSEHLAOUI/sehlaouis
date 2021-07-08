import { Component } from 'react';
import './Navbar.css'



class Navbar extends  Component{
 

    render(){
        return(
            <div className="Navbar-nav">
                <div className="Navbar-logo">
                    SEHLAOUIS

                </div>
                <ul className="Navbar-list">
                    <li>Home</li>
                    <li>Nos produits</li>
                    <li>Contact us</li>
                </ul>
                <div className="Navbar-connexion">
                    <button className="Navbar-connexion-in">SignIn</button>
                    {/* <button className="Navbar-connexion-out">SignOut</button> */}
                </div>
            </div>
        );
    }

}

export default Navbar ;
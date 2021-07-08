import { Component } from 'react';
import './Produit.css'



class Produit extends  Component{
 

    render(){
        return(
            <div className="pp-produit">
                <div className="pp-header">
                     
                    
                </div>
                <p className="pp-title">
                    Nour confort
                </p>
                <p className="pp-adress">
                    Guéliz in Guéliz Marrakech
                </p>
                <div className="pp-options" >
                    <ul className="pp-list-option">
                        <li className="pp-option">Medium quality</li>
                        <li className="pp-option">Under construction</li>
                        <li className="pp-option">Delivery January 2022</li>
                    </ul>
                </div>
                <button className="pp-prix">
                    2,200,000DH
                </button>

            </div>
        );
    }

}

export default Produit ;
import { Component } from 'react';
import './DetalProduit.css'



class DetailProduit extends  Component{

    UpdateImageBG=(color)=>{
        document.getElementById("id-produit-bg").style.backgroundColor=color
    }
 

    render(){
        return(
            <div className="page-DetailProduit">
                <div className="pp-DetailProduit">
                <div className="pp-DetailProduit-images" id="id-produit-bg">
                    <div className="pp-DetailProduit-images-panel">
                        <div className="pp-DetailProduit-image" onClick={()=>this.UpdateImageBG("red")}></div>
                        <div className="pp-DetailProduit-image" onClick={()=>this.UpdateImageBG("blue")}></div>
                        <div className="pp-DetailProduit-image" onClick={()=>this.UpdateImageBG("white")}></div>
                        <div className="pp-DetailProduit-image" onClick={()=>this.UpdateImageBG("black")}></div>
                    </div>
                    <div></div>
                </div>
                <div className="pp-DetailProduit-infos">
                <p className="pp-DetailProduit-title">
                    Nour confort
                </p>
                <p className="pp-DetailProduit-adress">
                    Guéliz in Guéliz Marrakech
                </p>
                <div className="pp-DetailProduit-detail">
                    ci vous trouverez les detail de chaque appartement 
                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement

                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement

                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement
                    ci vous trouverez les detail de chaque appartement
                </div>
                <div className="pp-DetailProduit-footer">
                    <div className="pp-DetailProduit-options" >
                        <ul className="pp-DetailProduit-list-option">
                            <li >Medium quality</li>
                            <li >Under construction</li>
                            <li >Delivery  2022</li>
                            <li >Medium quality</li>
                            <li >Under construction</li>
                            <li >Delivery January 2022</li>
                        </ul>
                    </div>
                    <button className="pp-DetailProduit-prix">
                        2,200,000DH
                    </button>
                </div>
                </div>
            </div>
            
            </div>
        );
    }

}

export default DetailProduit ;
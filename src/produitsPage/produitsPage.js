import { Component } from 'react';
import Produit from './produit/Produit';
import './produitsPage.css'
import Lastsells from '../LastSells/Lastsells';
import ControllPanel from '../ControllPanel/ControllPanel';




class ProduitsPage extends  Component{


    render(){
        return(
            <div className="page-produits">

                {/*  recherche panel*/}
                <div className="page-produits-recherche-panel">
                    <div className="page-produits-recherche-panel-br"></div>
                    
                    <div className="page-produits-recherche-panel-grid">
                        <div className="page-produits-recherche">
                            <input type="text" />
                            <button type="submit" >Rechercher</button>
                        </div>
                        <div  className="page-produits-panier-panel">
                            
                            <div className="page-produits-panier">
                                
                                
                            </div>
                            <div className="page-produits-panier-notify">10</div>
                        </div>
                    </div>
                </div>
                 
                <div className="page-produits-grid">
                        <div className="page-produits-controllblock">
                                <ControllPanel/>        
                        </div>

                       <div className="page-produits-produits">
                             {/* Best product list */}

                            <div className="page-produits-best">
                                <h2 className="page-produits-bestprodect-title">Best product :</h2>
                                
                                <div className="page-produits-bestprodect-list">
                                    <div className="page-produits-bestprodect">
                                    </div>
                                    <div className="page-produits-bestprodect">
                                    </div>
                                    <div className="page-produits-bestprodect">
                                    </div>
                                    <div className="page-produits-bestprodect">
                                    </div>
                                    <div className="page-produits-bestprodect">
                                    </div>
                                    <div className="page-produits-bestprodect">
                                    </div>
                                </div >
                            </div>
                            
                            {/*  Produst list */}

                            <div className="page-produits-list" > 
                                <h2 className="page-produits-bestprodect-title">Our products :</h2>   
                                <Produit/>
                                <Produit/>
                                <Produit/>
                                <Produit/>
                                <Produit/>
                                <div className="page-produits-list-end"></div>
                            </div>
                       </div>
                       
                        {/*  Last sells product */}

                        <div className="page-produits-lastsells" >
                            <Lastsells/>
                        </div>

                
                </div> 
               
                
            </div>
        );
    }

}

export default ProduitsPage ;
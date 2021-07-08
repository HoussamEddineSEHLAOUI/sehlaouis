import { Component } from 'react';
import './Conversation.css'



class Conversation extends  Component{

    reduire(){
        console.log("reduire conversation");
        var conversation1= document.getElementById("conv1");
        var conversation0= document.getElementById("conv0");

        if(conversation1.style.display !=='none' | conversation1.style.display ==='block'){
            conversation1.style.display ='none';
            conversation0.style.display ='block';
        }else{
            conversation1.style.display ='block';
            conversation0.style.display ='none';
        }
    }

    

    render(){
        return(
            <div className="conerversation" >
            <div className="coner-block" id="conv1">
                <div className="coner-header">
                    <div className="coner-header-reciver">
                        <div className="coner-header-image"></div>
                        <h4 className="coner-header-nom">SEHLAOUIS</h4>
                    </div>
                    <button className="coner-header-exit"
                    onClick={()=>this.reduire()}
                    >X</button>
                </div>
                <div className="coner-contenu">
                    <div className="coner-contenu-msg">
                        Bonjour !
                    </div>
                    <div className="coner-contenu-msg">
                        Houssam eddine 
                    </div>
                    <div className="coner-contenu-msg">
                        sehlaoui 
                    </div>
                    <div className="coner-contenu-msg-client">
                        re bonjour !
                    </div>
                    <div className="coner-contenu-msg">
                        Bonjour !
                    </div>
                    <div className="coner-contenu-msg">
                        Houssam eddine 
                    </div>
                    <div className="coner-contenu-msg">
                        sehlaoui 
                    </div>
                    <div className="coner-contenu-msg-client">
                        re bonjour !
                    </div>
                    <div className="coner-contenu-msg">
                        Bonjour !
                    </div>
                    <div className="coner-contenu-msg">
                        Houssam eddine 
                    </div>
                    <div className="coner-contenu-msg">
                        sehlaoui 
                    </div>
                    <div className="coner-contenu-msg-client">
                        bonjour
                        bonjour
                        bonjour
                        bonjour
                        bonjour
                        bonjour
                        bonjour
                    </div>

                </div>
                <div className="coner-footer"></div>
            </div>
            <div className="coner-block-none" id="conv0">
                <button className="coner-header-descusion" onClick={()=>this.reduire()}>Descusion</button>
            </div>
            </div>
        );
    }

}

export default Conversation ;
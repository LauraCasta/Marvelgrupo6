import React from "react";
import './tarjes.css'

function tarje({title, imagen, characters, description, creators}) {
    return (
      <div className="card text-center">
        <div className="overflow">
        <img src={imagen} alt="" className="card-img-top"/>
        </div>
        
        <div className="card-body">
            <h2 className='card-title'>{title ? title:" NO HAY TÍTULO "}</h2>
            <h4>{characters ? characters: " NO HAY PERSONAJE(S) "} </h4>
            <h5>{description ? description: " NO HAY DESCRIPCIÓN "} </h5>
            <h6> {creators ? creators: " NO HAY CREADORES PRINCIPE "} </h6>
            
            
            
        </div>
      </div>
    );
  }
  
  export default tarje;
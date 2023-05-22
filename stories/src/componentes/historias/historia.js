import React from 'react';


import './historias.css';

function historia({title, personaje, creador,descripcion}) {
    return (
        <div className= "card text-center">
            <div className="overflow">
            </div>
            <div className="card-body text-dark">
                <h4 className="card-text">{title}</h4>
                <p className="card-text text-secondary"></p>
                <h4 className="card-text">{personaje}</h4>
                <p className="card-text text-secondary"></p>
                <h4 className="card-text">{creador}</h4>
                <p className="card-text text-secondary"></p>
                <h4 className="card-text">{descripcion}</h4>
                <p className="card-text text-secondary"></p>
                
                
                
        </div>

     </div>
    )

}



export default historia;
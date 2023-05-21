import React, {useState, useEffect} from 'react'
import './comic.css'

function Comic () {
    const [datos, setUsers] = useState();

    const inform = (async () => {
    const response = await fetch(
        "https://vxidbs242iwupyvyy4dhl4uu2u0dptxa.lambda-url.us-east-1.on.aws/", {
            'mode' : 'cors'}).then((response) => response.json());
        setUsers(response);
    });


    useEffect(() => {  (async () => {await inform();  })();  }, []);

    console.log('datos',datos)

        return (         
            <div className="card_datos" >                  
                {datos &&
                    datos.map((dato) => (
                        <div className="card_fila" key={dato.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h2>{dato.title ? dato.title : "Sin nombre"}</h2>
                                    <img src= {dato.thumbnail.path+'.'+dato.thumbnail.extension} className="card_imagen"/>
                                    <div className='card_text'>
                                    <p></p>
                                    <p>{dato.description ? dato.description : "Sin descripción"}</p>
                                    <h5>Creadores:  </h5>
                                    <p>{dato.creators.items[0] ? '- '+dato.creators.items[0].name : "No parecen creadores"}</p>
                                    <p>{dato.creators.items[1] ? '- '+dato.creators.items[1].name : ""}</p>
                                    <p>{dato.creators.items[2] ? '- '+dato.creators.items[2].name : ""}</p>
                                    <p>{dato.creators.items[3] ? '- '+dato.creators.items[3].name : ""}</p>
                                    <p>{dato.creators.items[4] ? '- '+dato.creators.items[4].name : ""}</p>
                                    <h5>Personajes:  </h5>
                                    <p>{dato.characters.items[0] ? '- '+dato.characters.items[0].name : "No aparecen personajes"}</p>
                                    <p>{dato.characters.items[1] ? '- '+dato.characters.items[1].name : ""}</p>
                                    <p>{dato.characters.items[2] ? '- '+dato.characters.items[2].name : ""}</p>
                                    <p>{dato.characters.items[3] ? '- '+dato.characters.items[3].name : ""}</p>
                                    <p>{dato.characters.items[4] ? '- '+dato.characters.items[4].name : ""}</p>
                                    <h5>Número de paginas: </h5>
                                    <p>{dato.pageCount ? dato.pageCount : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    ))                
                }
            </div>    
        )
        
}

export default Comic



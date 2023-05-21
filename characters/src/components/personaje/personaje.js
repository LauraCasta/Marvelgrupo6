import React, {useState, useEffect} from 'react'
import './personaje.css'

function Personaje () {
    const [datos, setUsers] = useState();

    const inform = (async () => {
    const response = await fetch(
        "https://2aqhakjsuznh3dty7zb5e6bzya0wqzbx.lambda-url.us-east-1.on.aws/", {
            'mode' : 'cors'}).then((response) => response.json());
        setUsers(response.body);
    });


    useEffect(() => {  (async () => {await inform();  })();  }, []);
    //let datos = info.body
    //console.log('info',info);
    console.log('datos',[datos])

        return (         
            <div className="card_datos" >                  
                {datos &&
                    datos.map((dato) => (
                        <div className="card_fila" key={dato.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h2>{dato.name ? dato.name : "Sin nombre"}</h2>
                                    <img src= {dato.thumbnail.path+'.'+dato.thumbnail.extension} className="card_imagen"/>
                                    <div className='card_text'>
                                    <p></p>
                                    <p>{dato.description ? dato.description : "Sin descripción"}</p>
                                    <h5>Stories que aparece: </h5>
                                    <p>{dato.stories.items[0] ? '- '+dato.stories.items[0].name : "No parece en Stories"}</p>
                                    <p>{dato.stories.items[1] ? '- '+dato.stories.items[1].name : ""}</p>
                                    <p>{dato.stories.items[2] ? '- '+dato.stories.items[2].name : ""}</p>
                                    <p>{dato.stories.items[3] ? '- '+dato.stories.items[3].name : ""}</p>
                                    <p>{dato.stories.items[4] ? '- '+dato.stories.items[4].name : ""}</p>
                                    <h5>Comics que aparece: </h5>
                                    <p>{dato.comics.items[0] ? '- '+dato.comics.items[0].name : "No parece en Comics"}</p>
                                    <p>{dato.comics.items[1] ? '- '+dato.comics.items[1].name : ""}</p>
                                    <p>{dato.comics.items[2] ? '- '+dato.comics.items[2].name : ""}</p>
                                    <p>{dato.comics.items[3] ? '- '+dato.comics.items[3].name : ""}</p>
                                    <p>{dato.comics.items[4] ? '- '+dato.comics.items[4].name : ""}</p>
                                    <h5>Series que aparece: </h5>
                                    <p>{dato.series.items[0] ? '- '+dato.series.items[0].name : "No parece en Series"}</p>
                                    <p>{dato.series.items[1] ? '- '+dato.series.items[1].name : ""}</p>
                                    <p>{dato.series.items[2] ? '- '+dato.series.items[2].name : ""}</p>
                                    <p>{dato.series.items[3] ? '- '+dato.series.items[3].name : ""}</p>
                                    <p>{dato.series.items[4] ? '- '+dato.series.items[4].name : ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    ))                
                }
            </div>    
        )
        
}

export default Personaje
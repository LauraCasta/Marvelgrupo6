import React , {useState,useEffect}from 'react';
import './tarje.css';
import Tarje from './tarje';




function Tarjes() {
    const [tarje,setUser]= useState();
    const datos=(async ()=>{
        const response= await fetch("https://eyxz3yragptlbc4c3devj7oe7y0kzqjv.lambda-url.us-east-1.on.aws/", {'mode':'cors'}).then((response)=>response.json());
        setUser(response);
    });      /* crear una funcion en una constante*/
    useEffect(() => {  (async () => {await datos();  })();  }, []);
    console.log(tarje);
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className='row'>
                { tarje &&
                    tarje.map(tarjes => (
                        <div className="col-md-4" key={tarjes.id}>
                            <Tarje title={tarjes.title} imagen={tarjes.thumbnail.path+'.'+tarjes.thumbnail.extension} characters={tarjes.characters.items[0] ? tarjes.characters.items[0].name:''} 
                            description={tarjes.description} creators={tarjes.creators.items[0] ? tarjes.creators[0].items:''}/>
                        </div>
                    ))
                }
            </div>
        </div>

    );
  }
  
  export default Tarjes;
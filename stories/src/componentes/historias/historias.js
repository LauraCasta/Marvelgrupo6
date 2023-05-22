import React , {useState,useEffect}from 'react'
import Historia from './historia'


function Historias(){
    const [historias,setUser]=useState();
    const datos=(async ()=>{
        const response=await fetch("https://vnumjapgpoxfcxgxbm2irbuwum0iiqeq.lambda-url.us-east-1.on.aws/", {'mode': 'cors'}).then((response)=>response.json());
        setUser(response);
    });
    useEffect(() => { (async () => {await datos(); })(); }, []);
    console.log(historias);
        return (
        <div className="container d-flex justify-content-center aling-items-center h-100">
            <div className="row">
                { historias &&
                    historias.map(historias => (
                        <div className="col-md-4" key={historias.id}>
                            <Historia title={historias.originalIssue.name} personaje={historias.characters.items[0] ? historias.characters.items[0].name:'no hay personaje'}
                             creador={historias.creators.items[0] ? historias.creators.items[0].name:'no hay creador'} descripcion={historias.title} />
                            </div>
                    ))
                    }
            </div>
        </div>
    )
}
export default Historias;
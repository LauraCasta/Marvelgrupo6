import './App.css';
import Nav from './componentes/Nav/nav'
import Banner from './componentes/Banner/banner'
import Tarjes from './componentes/tarjetas/tarjes'



function App() {
  
  return (
    <div className="App">
      <div> <Nav/> </div>
      <div> <Banner/> </div>
      <div className='App_titulo'>
        <h1> SERIES </h1>
      </div>
      <div> <Tarjes/> </div>
    </div>
  );
}

export default App;

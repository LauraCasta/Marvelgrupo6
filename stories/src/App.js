import Nav from './componentes/Nav/nav'
import Banner from './componentes/Banner/banner'
import Historias from './componentes/historias/historias'

import './App.css';

function App() {
  return (
    <div className="App">
      <div><Nav/></div>
      <div><Banner/></div>
      <div className="App_titulo">
          <h1>STORIES</h1>
          <div><Historias/></div>
      </div>
    </div>
  );
}

export default App;


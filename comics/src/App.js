import Nav from './components/Nav/nav';
import Banner from './components/Banner/banner'
import Comic from './components/comic/comic'
import './App.css';

function App() {
  return (
    <div className="App">
      <div><Nav/></div>
      <div><Banner/></div>
      <div className="App_titulo">        
        <h1>COMICS</h1>
      </div>      
      <div><Comic/></div>
    </div>
  );
}

export default App;

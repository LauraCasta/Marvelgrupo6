
import './App.css';
import log from './images/log.jpeg'
import mar from './images/Marvel.jpeg'
import Nav from './components/Nav/nav';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <header className="App-headerlogo">
            <img src={log}  className="App-logo"/>
            <div><Nav /></div>
        </header>         
           
        <h1>Characters</h1>
      </header>
    </div>
    </>
  );
}

export default App;

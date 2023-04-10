import './App.css';
import BrowserRouter from 'react-router-dom/BrowserRouter'

// Components
import Game from './Components/Game';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Dragon Cards</h1>
        <Game/>
      </BrowserRouter>
    </div>
  );
}

export default App;

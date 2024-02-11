import './App.css';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import BakeryFinder from './Components/Listing';

function App() {
  return (
    <div className="App">
      <header className='header'>
      <Header/>
      </header>
      <Home/>
      <BakeryFinder/>
    </div>
  );
}

export default App;

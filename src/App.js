import logo from './logo.svg';
import './App.css';
import NavBar from './componets/NavBar';
import Card from './componets/Card/Card';
import Home from './componets/Home/Home';
import Carcard from './componets/Home/Carcard';

function App() {
  return (
  <div>
    <NavBar />
    <Home />
    <Card />
  
    <Carcard />
  </div>
  );
}

export default App;

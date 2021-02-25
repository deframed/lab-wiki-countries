import logo from './logo.svg';
import './App.css';
// import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'


function App() {
  return (
    <div>
      <Navbar />

      <CountriesList />
     
    </div>
  );
}

export default App;

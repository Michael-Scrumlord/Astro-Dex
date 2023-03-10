
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import HomeView from './components/HomeView';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/Catalog" element={<Catalog/>} />
      </Routes>
     
    </div>
  );
}

export default App;

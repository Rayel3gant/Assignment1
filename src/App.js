import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Data from './pages/Data';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App w-full h-screen bg-gradient-to-r from-[#d1d0d9] to-[#646491]">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/data' element={<Data/>}/>

      </Routes>
    </div>
  );
}

export default App;

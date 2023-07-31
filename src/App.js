import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import Coins from './components/Coins';
import Header from './components/Header';
import Exchanges from './components/Exchange';
import CoinDetails from './components/CoinsDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
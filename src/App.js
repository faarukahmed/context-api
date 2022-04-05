import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleCoin from './components/SingleCoin/SingleCoin';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path ="/coins" element={<Coins></Coins>}></Route>
                <Route path='/coin/:coinId' element={<SingleCoin></SingleCoin>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path='/about' element={<About></About>}></Route>
            </Routes>
        </div>
    );
};

export default App;
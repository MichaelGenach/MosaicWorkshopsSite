import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Menu from './components/Menu';
import Home from './components/Home';
import Private from './components/Private';
import Company from './components/Company';
import Tours from './components/Tours';
import Pottery from './components/Pottery';
import Janur from './components/Janur';
import BookingWidget from './components/BookingWidget';
import Reviews from './components/Reviews';


function App() {

  const [width, setWidth] = useState(0);

  return (
    <div className="App">
     
   
      <BrowserRouter>
       
          <Menu />
     

          <Routes>
            <Route path='/' element={<Home width={width} setWidth={setWidth} />} />
            <Route path='/private' element={<Private width={width} setWidth={setWidth} />} />
            <Route path='/company' element={<Company width={width} setWidth={setWidth} />} />
            <Route path='/tours' element={<Tours width={width} setWidth={setWidth} />} />
            <Route path='/pottery' element={<Pottery width={width} setWidth={setWidth} />} />
            <Route path='/janur' element={<Janur width={width} setWidth={setWidth} />} />
            <Route path='/bookingWidget' element={<BookingWidget width={width} setWidth={setWidth} />} />

          </Routes>
    
      </BrowserRouter>
    </div>
  );
}

export default App;

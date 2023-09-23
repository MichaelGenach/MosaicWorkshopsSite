import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';

import Private from './components/Private';
import Company from './components/Company';
import Tours from './components/Tours';

function App() {
 
  const [width, setWidth] = useState(0)
 
  return (
    <div className="App" >

<BrowserRouter>

<Menu/>

<Routes>

<Route path='/' element={<Home width={width} setWidth={setWidth}/>}/>
<Route path='/private' element={<Private/>}/>
<Route path='/company' element={<Company/>}/>
<Route path='/tours' element={<Tours/>}/>

</Routes>


</BrowserRouter>


    </div>
  );
}

export default App;

import { useState } from 'react';

import Home from './modules/Home/Home';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import './app.css'

function App() {

  return (
    <div className='App container-fluid bg-light-subtle text-dark m-0 p-0'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from 'react';

import Home from './modules/Home/Home';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';
import './app.css'
import profilePic from './assets/profile-pic.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App container-fluid bg-light-subtle text-dark m-0 p-0'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

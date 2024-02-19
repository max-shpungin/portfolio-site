import { useState } from 'react';

import Home from './modules/Home/Home';
import Nav from './modules/Nav/Nav';
import Footer from './modules/Footer/Footer';
import './app.css'
import profilePic from './assets/profile-pic.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container-fluid bg-green-200 text-green-500'>
      <Nav/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

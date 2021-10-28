import './App.css';
import Header from "../Header/Header"
import React from 'react'
import cake_pops from '../../assets/cakepop2.webp'


const App = () => {
  return (
    <div className="App"style={{ 
      backgroundImage: `url(${cake_pops})` ,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Header />

    </div>
  );
}

export default App;

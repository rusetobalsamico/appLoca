// importo react. Siempre importar React
import React from 'react';
// importo el componente Header.js
import Header from './components/Header';
// importo el componente Footer.js
import Footer from './components/Footer';
// importo el componente NASAGallery.js
import NASAGallery from './components/nasagallery/NASAGallery';
// importo la hoja de estilos de App.css
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <NASAGallery/>
      <Footer/>
    </div>
  );
}

export default App;
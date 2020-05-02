import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Gallery from "./components/Gallery";

function App() {
  return (
      <>
        <div className="header">
          <Header />
        </div>
        <Gallery />
       </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Portfolio />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Bio from './components/Bio';


function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Bio />
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Bio from './components/Bio/Bio';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';


function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid='true' id="container">
        <Bio />
        <ProjectGrid />
      </Container>
    </div>
  );
}

export default App;

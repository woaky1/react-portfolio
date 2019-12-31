import React from 'react';
import './App.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Bio from './components/Bio/Bio';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import Footer from './components/Footer/Footer';

// The App component is where we create the general structure of the page.
function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid='true' id="container">
        <Bio />
        <ProjectGrid />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

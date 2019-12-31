import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// This contains the header bar seen at the top of the page.
function Header() {
    return (
        <Navbar bg="dark">
            <Navbar.Brand style={{color: 'white'}}>Will Oakley: Full Stack Web Developer</Navbar.Brand>
        </Navbar>
    );
}

export default Header;
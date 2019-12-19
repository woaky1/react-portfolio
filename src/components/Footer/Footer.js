import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

function Footer() {
    return (
        <Row>
            <Col id='footer'>
                <p>&#169;Copyright</p>
            </Col>
        </Row>
    );
}

export default Footer;
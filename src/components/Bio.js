import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Headshot from '../assets/images/my_headshot.jpg'

function Bio() {
    return(
        <Row>
            <Col>
                <img src={Headshot} alt='Will Oakley' />
            </Col>
        </Row>
    );
}

export default Bio;
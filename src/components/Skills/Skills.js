import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Skills() {
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <div>
                        <h1>Skills</h1>
                        <hr />
                    </div>
                </Row>
                <Row>
                    <Col>HTML5</Col>
                    <Col>CSS3</Col>
                    <Col>Javascript</Col>
                    <Col>NodeJS</Col>
                    <Col>React</Col>
                    <Col>Bootstrap</Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Skills;
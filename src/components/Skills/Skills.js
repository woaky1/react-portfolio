import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './skillsCSS.css'
import HTMLIcon from './icons/HTML5_Logo_128.png'
import CSSIcon from './icons/HTML5_Styling_128.png'
import JSIcon from './icons/240px-JavaScript-logo.png'
import NodeIcon from './icons/320px-Node.js_logo.svg.png'
import ReactIcon from './icons/logo192.png'
import BootIcon from './icons/bootstrap-solid.svg'

// This component creates the box containing icons of the technologies I'm most familiar with.
function Skills() {
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <div className="skillBox">
                            <Row>
                                <Col>
                                    <h1>Skills</h1>
                                    <hr />
                                </Col>
                            </Row>
                            <Row style={{paddingBottom: "3rem"}}>
                                <Col>
                                    <Image className="icon" src={HTMLIcon} fluid />
                                </Col>
                                <Col>
                                    <Image className="icon" src={CSSIcon} fluid />
                                </Col>
                                <Col>
                                    <Image className="icon" src={JSIcon} fluid />
                                </Col>
                                <Col>
                                    <Image className="icon" id="node" src={NodeIcon} fluid />
                                </Col>
                                <Col>
                                    <Image className="icon" src={ReactIcon} fluid />
                                </Col>
                                <Col>
                                    <Image className="icon" src={BootIcon} fluid />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row >
    )
}

export default Skills;
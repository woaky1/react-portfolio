import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Headshot from './my_headshot.jpg'

function Bio() {
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <div id="bioBox">
                            <img src={Headshot} alt='Will Oakley' style={{ float: "left" }} />
                            <p className="bioText">Hey there! My name is Will Oakley, a full stack web developer and graduate of Northwestern's Coding Bootcamp. I've worked in software development for twelve years as both a writer, a production specialist, and, now, a developer.</p>

                            <p className="bioText">I'm interested in web development, javascript, and finding ways to apply technology to help others.</p>

                            <p className="bioText">I'm also a <a href="https://ddb.ac/characters/2700895/iwpTsp" target="_blank" rel="noopener noreferrer">level 8 barbarian</a> in a <em>Dungeons &amp; Dragons</em> game with my friends.</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Bio;
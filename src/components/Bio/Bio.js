import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headshot from './my_headshot.jpg'
import linkedIn from './linkedin-128.png'
import gitHub from './github-128.png'
import resume from './will_oakley_resume.pdf'
import "./bioCSS.css"

function Bio() {
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <div id="bioBox">
                            <Row>
                                <Col>
                                    <div >
                                        <h1>About Me</h1>
                                        <hr />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={3} md={6}>
                                    <div >
                                        <img src={headshot} alt='Will Oakley' id="bioPic" className="img-fluid d-block m-auto"/>
                                    </div>
                                </Col>
                                <Col lg={9} md={6}>
                                    <div>
                                        <p className="bioText">Hey there! My name is Will Oakley, a full stack web developer and graduate of Northwestern's Coding Bootcamp. I've worked in software development for twelve years as a writer, a production specialist, and, now, a developer.</p>
                                        <p className="bioText">I'm interested in web development, javascript, and finding ways to apply technology to help others.</p>
                                        <p className="bioText">I'm also a <a href="https://ddb.ac/characters/2700895/iwpTsp" target="_blank" rel="noopener noreferrer">level 8 barbarian</a> in a <em>Dungeons &amp; Dragons</em> game with my friends.</p>
                                        <p className="bioText">You can check out my resume <a href={resume}>here</a>.</p>
                                        <a href="https://www.linkedin.com/in/william-oakley-49b7b618b/" target='_blank' rel='noopener noreferrer'><img src={linkedIn} alt='Link to LinkedIn Page' className='linkIcon' id='linkedInIcon' /></a>
                                        <a href="https://github.com/woaky1" target='_blank' rel='noopener noreferrer'><img src={gitHub} alt='Link to GitHub Page' className='linkIcon' id='gitHubIcon' /></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Bio;
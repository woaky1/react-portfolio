import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project/Project';
import projectInfo from './projectData.json';
import CardGroup from 'react-bootstrap/CardGroup';
// This component is used to create the grid we populate the information about projects into.
function ProjectGrid() {
    // Here we establish an array that will hold the Bootstrap Cards containing our project data.
    let cards = [];
    // With this for loop, we create each of the individual cards for the grid and add them to the cards array
    for (let i=0; i < projectInfo.length; i++) {
        cards.push(<Project project={projectInfo[i]} key={projectInfo[i].title} />)
    }
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <h1>Projects</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardGroup>
                            {/* We display the cards by calling the array containing them below */}
                            {cards}
                        </CardGroup>
                    </Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default ProjectGrid;
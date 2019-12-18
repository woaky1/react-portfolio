import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project/Project';
import projectInfo from './projectData.json';
import CardGroup from 'react-bootstrap/CardGroup';

function ProjectGrid() {
    let cards = [];
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
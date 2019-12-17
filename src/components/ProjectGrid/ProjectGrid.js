import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project/Project';

function ProjectGrid() {
    return (
        <Row>
            <Col></Col>
            <Col md={10}>
                <Row>
                    <Col>
                        <div>
                            <h1>Projects</h1>
                            <hr />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><Project /></Col>
                    <Col><Project /></Col>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default ProjectGrid;
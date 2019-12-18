import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from '../Project/Project';
import projectInfo from './projectData.json';

console.log(projectInfo[0].title)
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
                    <Col style={{float: 'left'}}>
                        <Project project={projectInfo[0]}/>
                    </Col>
                    <Col>
                        <Project project={projectInfo[1]}/>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <Project />
                    </Col>
                </Row> */}
            </Col>
            <Col></Col>
        </Row>
    )
}

export default ProjectGrid;
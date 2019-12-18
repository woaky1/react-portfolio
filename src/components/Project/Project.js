import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./projectCSS.css";

function Project(props) {
    console.log(props.project.img)
    if (props.project.weblink) {
        return (
            <Card style={{ maxWidth: '18rem', minWidth: "15rem" }}>
                <Card.Img variant="top" src={require(`${props.project.img}`)} />
                <Card.Body className="left">
                    <Card.Title className="left">{props.project.title}</Card.Title>
                    <Card.Text className="left">
                        {props.project.description}
                    </Card.Text>
                    <a href={props.project.github} alt="Link to GitHub repo" target="_blank" rel="noopener noreferrer"><Button variant="primary" className="button">GitHub Repo</Button></a>
                    <a href={props.project.weblink} alt="Link to live page" target="_blank" rel="noopener noreferrer"><Button variant="danger" className="button">Live Page</Button></a>
                </Card.Body>
            </Card>
        );
    } else {
        return (
            <Card style={{ maxWidth: '18rem', minWidth: "15rem" }}>
                <Card.Img variant="top" src={require(`${props.project.img}`)} />
                <Card.Body>
                    <Card.Title className="left">{props.project.title}</Card.Title>
                    <Card.Text className="left">
                        {props.project.description}
                    </Card.Text>
                    <a href={props.project.github} alt="Link to GitHub Repo" target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub Repo</Button></a>
                </Card.Body>
            </Card>
        );
    };

}

export default Project;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./projectCSS.css";

//This component takes the information for one project from projectData.json (passed in via props) and populates it into a Bootstrap card for display in the Project Grid.
function Project(props) {
    // Since some of my projects are CLI only, we need to set up an array that we will fill with the appropriate buttons depending on the project.
    let buttons = [];
    // If the project has a live link, the following two buttons will be added to the buttons array.
    if (props.project.weblink) {
        buttons.push(
            <a href={props.project.github} alt="Link to GitHub repo" target="_blank" rel="noopener noreferrer"><Button variant="primary" className="button">GitHub Repo</Button></a>,
            <a href={props.project.weblink} alt="Link to live page" target="_blank" rel="noopener noreferrer"><Button variant="danger" className="button">Live Page</Button></a>
        )
        // If the project is CLI, then only this button will be added to the buttons array.
    } else {
        buttons.push(
            <a href={props.project.github} alt="Link to GitHub Repo" target="_blank" rel="noopener noreferrer"><Button variant="primary">GitHub Repo</Button></a>
        )
    };
    return (
        <Card style={{ maxWidth: '18rem', minWidth: "15rem" }}>
            <Card.Img variant="top" src={require(`${props.project.img}`)} />
            <Card.Body className="left">
                <Card.Title className="left">{props.project.title}</Card.Title>
                <Card.Text className="left">
                    {props.project.description}
                    <br />
                    <br />
                    <b>Tech Used:</b>
                    <br />
                    {props.project.tech}
                </Card.Text>
                {/* Here, we display the buttons related to this project by calling the butons array we set earlier. */}
                {buttons}
            </Card.Body>
        </Card>
    );

}

export default Project;
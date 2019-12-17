import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Project(props) {
    console.log(props.project.img)
    return (
        <Card>
            <Card.Img variant="top" src={require(`${props.project.img}`)} />
            <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );

}

export default Project;
import React from "react"
import {
    Card
} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import pic from '../me&millie.jpg'

export default function GitHubCard(){
    return(
        <Card style={{ width: '100rem' }}>
            <Card.Img variant='top' src={pic} alt="Profile photo" style={{'width': '20%'}}></Card.Img>
            <Card.Body>
                <Card.Title>Jack H. Ersbo</Card.Title>
                <Card.Text>I am a student fullstack developer who is currently learning about React testing!</Card.Text>
                <Button variant="primary" href="https://github.com/jhersbo">My Github!</Button>
            </Card.Body>
        </Card>
    )
}
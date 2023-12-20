import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

function TripPage(){
    const {tripId} = useParams()
    const [trip, setTrip] = useState(null)
    const nav = useNavigate()
    
    useEffect(() => {
        fetch(`/trips/${tripId}`)
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((tripData) => {
                    setTrip(tripData)
                })
            } else {
                // handle what should happen if not logged in
                console.log('Error finding trip details')
            }
        })
    },[])

    function deleteTrip() {
        fetch(`/trips/${tripId}`, {
            method: "DELETE"
        })
        .then((resp) => {
            if (resp.ok) {
                setTrip("")
                nav('/trips')
            }
        })
    }

    if (trip === null) {
        return <p>Loading...</p>
    }

    return(
        <Container>
            <br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img src={trip.location.img}/>
                        <Card.Body>
                            <Card.Title>{trip.location.name}</Card.Title>
                            <Card.Text>{trip.date}</Card.Text>
                            <Card.Text>
                                Packing List: {trip.packing_list}
                            </Card.Text>
                            <Button variant="primary" onClick={deleteTrip}>Delete Trip</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default TripPage
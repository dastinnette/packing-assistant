import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import CreateTrip from "./CreateTrip";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function LocationPage(){
    const {locationId} = useParams()
    const [location, setLocation] = useState(null)

    useEffect(() => {
        fetch(`/locations/${locationId}`)
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((locationData) => {
                    setLocation(locationData)
                })
            } else {
                // handle what should happen if not logged in
                console.log('Error finding location details')
            }
        })
    },[])
    
    if (location === null) {
        return <p>Loading...</p>
    }
 
    return(
        <Container>
            <br></br>
            <Row>
                <Col>
                    <Card>
                        <Card.Img src={location.img}/>
                        <Card.Body>
                            <Card.Title>{location.name}</Card.Title>
                            <Card.Text>
                                {location.description}
                            </Card.Text>
                            <Card.Text>
                                Average daily temperature: {location.weather}
                            </Card.Text>
                            <Card.Text>
                                Recommended vaccinations: {location.vaccinations}
                            </Card.Text>
                            <Card.Text>
                                Recommended power adapters: {location.plug_adapter}
                            </Card.Text>
                            <Card.Text>
                                Travel advisory: {location.travel_advisory}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <CreateTrip location={location} locationId={locationId}/>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default LocationPage
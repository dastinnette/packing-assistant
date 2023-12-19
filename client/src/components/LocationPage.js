import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
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
                console.log('Error')
            }
        })
    },[])
    
    if (location === null) {
        return <p>Loading...</p>
    }
 
    return(
        <Container>
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
                </Col>
            </Row>
        </Container>
    )
}

export default LocationPage
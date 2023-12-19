import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LocationCard({user, setUser, location, setLocations}){
    const navigate = useNavigate()

    return(
        <Card style={{ width: '20rem' }}>
            <Card.Img  src={location.img} />
            <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <Button variant="primary" onClick={()=>navigate(`/locations/${location.id}`)}>Learn More</Button>
            </Card.Body>
        </Card>
    )
}

export default LocationCard
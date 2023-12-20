import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TripCard({user, setUser, trip, setTrips}){
    const navigate = useNavigate()

    return(
        <Card style={{ width: '20rem' }}>
            <Card.Img  src={trip.location.img} />
            <Card.Body>
                <Card.Title>{trip.location.name}</Card.Title>
                <Card.Text>{trip.date}</Card.Text>
                <Button variant="primary" onClick={()=>navigate(`/trips/${trip.id}`)}>View Packing List</Button>
            </Card.Body>
        </Card>
    )
}

export default TripCard
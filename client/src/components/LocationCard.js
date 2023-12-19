import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LocationCard({user, setUser, location, setLocations}){
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img  src={location.img} />
            <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                {/* <Card.Text>{location.description}</Card.Text> */}
                <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    )
}

export default LocationCard
// import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LocationCard from "./LocationCard";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function LocationsPage(){
    const {user, setUser, locations, setLocations} = useOutletContext()
    const locationCards = locations.map(location => <LocationCard key={location.id} setUser={setUser} location={location} setLocations={setLocations} user={user}/>)
    
    return (
        <Container>
            <Row>
                {locationCards}
            </Row>
        </Container>
    )
}

export default LocationsPage
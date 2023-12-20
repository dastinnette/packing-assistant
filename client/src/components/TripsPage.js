import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import TripCard from "./TripCard";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function TripsPage(){
    const [trips, setTrips] = useState([])
    const {user, setUser} = useOutletContext()
    
    useEffect(() => {
        fetch('/trips')
            .then((resp) => resp.json())
            .then((tripObj) => {
                setTrips(tripObj[0]);
            });
      }, []);

    const tripCards = trips.map(tripObj => <TripCard key={tripObj.id} trip={tripObj} setTrips={setTrips} user={user} setUser={setUser} />)

    return(
        <Container>
            <br></br>
            <Row>
                {tripCards}
            </Row>
        </Container>
    )
}

export default TripsPage
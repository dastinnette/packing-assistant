import { useOutletContext } from "react-router-dom";
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateTrip({ location }){
    const [trip, setTrip] = useState(null)
    const {user} = useOutletContext()
    const nav = useNavigate()

    const newTripSchema = yup.object().shape({
        date: yup.string().min(10, 'Date must be YYYY-MM-DD').max(10, 'Date must be YYYY-MM-DD').required('Date required!'),
        packing_list: yup.string().required('You must bring clothes on your trip!')
    })

    const formik = useFormik({
        initialValues: {
            user_id: user.id,
            location_id: location.id,
            date: '',
            packing_list: ''
        },
        validationSchema: newTripSchema,
        onSubmit: (values) => {
            fetch('/trips', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(({ trip }) => {
                        setTrip(trip)
                        nav('/trips')
                    })
                } else {
                    console.log('error posting trip')
                }
            })
        }
    })

    return(
        <Container>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="text-center">Plan for your trip to {location.name}</h3>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    {Object.keys(formik.errors).map((key) => <li>{formik.errors[key]}</li>)}
                    <Form onSubmit={formik.handleSubmit}>

                        <Form.Group>
                            <Form.Label>Departure date</Form.Label>
                            <Form.Control 
                                id="date"
                                type="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Packing List</Form.Label>
                            <Form.Control
                                id="packing_list" 
                                as="textarea"
                                placeholder="What do you need to pack?" 
                                value={formik.values.packing_list}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Create Trip
                        </Button>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
}

export default CreateTrip
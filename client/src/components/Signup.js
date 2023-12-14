// import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup({ setUser }) {
    // const [signup, setSignup] = useState(true)
    
    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Username must be between 5 and 15 characters').max(15, 'Username must be between 5 and 15 characters'),
        email: yup.string().email('Invalid email'),
        password: yup.string().min(5, 'Password must be between 5 and 15 characters').max(15, 'Password must be between 5 and 15 characters'),
        // passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
            fetch('/users', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values)
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then(({ user }) => {
                        setUser(user)
                        // navigate into site
                    })
                } else {  
                    console.log('errors? handle them')
                }
            })
        }
    })
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                id="username"
                                placeholder="Enter username" 
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                id="email"
                                type="email" 
                                placeholder="Enter email" 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password" 
                                type="password" 
                                placeholder="Password" 
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
}

export default Signup 
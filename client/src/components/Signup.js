import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup({ setUser }) {
    const [signup, setSignup] = useState(true)
    
    const signupSchema = yup.object().shape({
        username: yup.string().min(5, 'Username is too short').max(15, 'Username is too long').required('Username required!'),
        email: yup.string().email('Invalid email'),
        password: yup.string().min(5, 'Password is too short').max(15, 'Password is too long').required('Password required!'),
        passwordConfirmation: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
    })
    const loginSchema = yup.object().shape({
        username: yup.string().required('Username required'),
        password: yup.string().required('Password required')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: signup ? signupSchema : loginSchema,
        onSubmit: (values) => {
            const endpoint = signup ? '/users' : '/login'
            fetch(endpoint, {
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
    
    function toggleSignup() {
        setSignup((currentSignup) => !currentSignup)
    }

    return (
        <Container>
            <div>
                <h1>Welcome to Pack Assist</h1>
                <p>Please sign up or log in below</p>
            </div>
            <Row className="justify-content-md-center">
                <Col lg="6">
                    {Object.keys(formik.errors).map((key) => <li>{formik.errors[key]}</li>)}
                    <Button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</Button>
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

                        {signup && <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                id="email"
                                type="email" 
                                placeholder="Enter email" 
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>}

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

                        {signup && <Form.Group>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                id="passwordConfirmation" 
                                type="password" 
                                placeholder="Password Confirmation" 
                                value={formik.values.passwordConfirmation}
                                onChange={formik.handleChange}
                            />
                        </Form.Group>}
                        
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
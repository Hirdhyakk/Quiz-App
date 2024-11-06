import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const User = (props) => {
    const { setUser } = props;

    const [userDetails, setUserDetails] = useState({
        name: '', email: '', age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(userDetails);
    }

    return (
        <>
            <Container className="my-5">
                <Row>
                    <Col md={6} className="offset-md-3">
                        <h3 className="text-center mb-4">Enter Your Details</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter your age"
                                    name="age"
                                    value={userDetails.age}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Start Quiz
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default User;
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';

const Result = (props) => {
    const { user, score, questions, responseAnswers } = props;
    const { name, email, age } = user;

    // console.log(user, score, questions, responseAnswers);

    const [maxMarks, setMaxMarks] = useState(0);
    let totalMarks = 0;

    useEffect(() => {
        let totalMarks = 0;
        questions.forEach((question) => {
            totalMarks += question.score;
        });
        setMaxMarks(totalMarks);
    }, [questions]);

    return (
        <Container className="mt-5">
            <h1 className='text-center'>RESULT</h1>

            <Row className="mb-4">
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title>User Information</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Name:</strong> {name}</ListGroup.Item>
                                <ListGroup.Item><strong>Email:</strong> {email}</ListGroup.Item>
                                <ListGroup.Item><strong>Age:</strong> {age}</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col md={6} className="mx-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title>Score</Card.Title>
                            <p className="lead">Your Marks: <span className="badge bg-primary">{score}</span></p>
                            <p className="lead">Maximum Marks: <span className="badge bg-secondary">{maxMarks}</span></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                {questions.map((question, index) => {
                    const userAnswer = responseAnswers[index];
                    const isCorrect = userAnswer === question.correctAnswer;

                    totalMarks += question.score;

                    return (
                        <Col md={6} className="mb-3" key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='mb-4'>Q{index + 1}. {question.question}</Card.Title>
                                    <p><strong>Your Answer:</strong> {userAnswer ? userAnswer : <span className='text-secondary'>Unanswered</span>}</p>
                                    <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
                                    <p>
                                        <strong>Status: </strong>
                                        <span className={isCorrect ? "text-success" : "text-danger"}>
                                            {isCorrect ? "Correct" : "Wrong"}
                                        </span>
                                    </p>
                                    <p>
                                        <strong>Marks: </strong>
                                        <span className={isCorrect ? "text-success" : "text-danger"}>{isCorrect ? `+${question.score}` : `-${question.penalty}`}
                                        </span>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
                }
            </Row>
        </Container>
    );
}

export default Result;

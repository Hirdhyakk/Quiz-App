import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import Question from "./Question";

const Quiz = (props) => {
    const { questions, setScore, setResponseAnswers } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
    const [isCompleted, setIsCompleted] = useState(false);
    const [marks, setMarks] = useState(0);

    const nextQuestion = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        if (currentIndex === questions.length - 2) {
            setIsCompleted(true);
        }
    };

    const handleAnswerChange = (index, selectedOption) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[index] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        // console.log(selectedAnswers);

        let totalMarks = 0;

        selectedAnswers.forEach((answer, index) => {
            // console.log(answer, index, questions[index]);
            if (answer === questions[index].correctAnswer) {
                totalMarks += parseInt(questions[index].score);
            } else if(answer) {
                totalMarks -= parseInt(questions[index].penalty);
                // console.log(totalMarks);
            }
        });

        console.log(totalMarks);
        setResponseAnswers(selectedAnswers);

        setScore(totalMarks);
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center">QUIZ</h1>
            <p className="text-center mb-4">{currentIndex + 1} out of {questions.length}</p>

            <Question
                question={questions[currentIndex]}
                index={currentIndex}
                selectedAnswer={selectedAnswers[currentIndex]}
                onAnswerChange={handleAnswerChange}
            />

            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    {!isCompleted ? (
                        <Button variant="primary" onClick={nextQuestion} disabled={currentIndex === questions.length - 1}>
                            Next
                        </Button>
                    ) : (
                        <Button variant="success" onClick={handleSubmit}>
                            Submit
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Quiz;

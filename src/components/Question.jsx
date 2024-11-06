import { Form, Row, Col } from 'react-bootstrap';

const Question = (props) => {
    const { question, index, selectedAnswer, onAnswerChange } = props;

    return (
        <div className='w-75 mx-auto py-4'>
            <h2 className='text-center mb-4'>{question.question}</h2>

            <Form>
                <Row className="justify-content-center">
                    {question.options.map((option, idx) => (
                        <Col sm={12} md={6} key={idx} className="mb-3">
                            <Form.Check
                                type="radio"
                                name={`question-${index}`}
                                id={`option-${index}-${idx}`}
                                label={option}
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => onAnswerChange(index, option)}
                                className="d-flex align-items-center justify-content-start px-3 py-2 border rounded custom-radio"
                            />
                        </Col>
                    ))}
                </Row>
            </Form>
        </div>
    );
};

export default Question;

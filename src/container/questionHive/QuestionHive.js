import React from 'react';
import './questionHive.scss';
import { Col, Container, Row } from 'react-bootstrap';
import SkipAll from '../../components/skip/SkipAll';
import Question from '../../components/questionBar/Question';
import StepQuestions from '../../components/stepQuestion/StepQuestions';


function QuestionHive(props) {
    return (
        <div className='question-hive'>
            <Container>
                <Row>
                    <Col md={10} lg={10}>

                    </Col>
                    <Col md={2} lg={2}>
                        <SkipAll />
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2}>

                    </Col>
                    <Col md={10} lg={10}>
                        <Question />
                        <StepQuestions/>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}
export default QuestionHive;
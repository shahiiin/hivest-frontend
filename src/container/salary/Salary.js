import React from 'react';
import './salary.scss';
import {Container,Row,Col} from 'react-bootstrap';
import SkipAll from '../../components/skip/SkipAll';
import Question from '../../components/questionBar/Question';
import QuestionCard from '../../components/cardSalary/QuestionCard';


function Salary (props){
    return(
        <div className='salary'>
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
                    <Col md={10} lg={10} xs={12}>
                        <Question />
                       <QuestionCard/>
                    </Col>
                 
                </Row>
            </Container>
        </div>
    )
}
export default Salary;
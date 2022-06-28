import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './stepQuestions.scss';


function StepQuestions(props) {
    return (
        <div className='step-questions'>
            <Container>
                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <h2 >Only 9 Step to personalize suggestions</h2>
                        <p>There is some Questions that knowing them make our 
                            suggestions better custom for your wallet and your life-style.
                             You can edit them in your profile info, eny time you want.</p>
                        <button>Start Telling </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StepQuestions;
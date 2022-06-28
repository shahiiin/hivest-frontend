import React from 'react';
import {Container,Row,Col}from 'react-bootstrap';
import hegza from '../../assets/image/hegza1.png';
import hegzagon from '../../assets/image/hegza2.png';
import './channelPlan.scss';

function ChannelPlans(props){
    return(
        <div className='back-test-box'>
            <Container>
                <Row>
                    <Col md={8} lg={8}>
                        <h2>Back Testing</h2>
                        <h6>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I,knpsum has been the industry's standard dummy te cxt ever since the 1500s, when an unknown printer took a galley of type and
                                                    </h6>
                    </Col>
                    <Col md={4} lg={4}>
                        <img src={hegza} alt="hegza" className='hegza' />
                        <img src={hegzagon} alt="hegzagon" className='hegzagon' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ChannelPlans;
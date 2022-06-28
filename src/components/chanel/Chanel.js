import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Subscribe from '../../assets/image/Subscribe.svg';
import BackTesting from '../../assets/image/BackTesting.svg'
import Paper from '../../assets/image/Paper Testing.svg';
import './chanel.scss';


function Chanel (props){
    return(
        <div className='chanel-box'>
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <h1>Channels</h1>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing<br></br>
                         industries for previewing layouts and visual mockups.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='chanel-row'>
                    <Col md={3} lg={3}>

                    </Col>
                    <Col md={2} lg={2} xs={4} className='chanel-content'>
                        <img src={Subscribe} alt='Subscribe'/>
                        <h4>Subscrib</h4>
                    </Col>
                    <Col md={2} lg={2} xs={4} className='chanel-content'>
                        <img src={BackTesting} alt='BackTesting' />
                        <h4>BackTesting</h4>
                    </Col>
                    <Col md={2} lg={2} xs={4} className='chanel-content'>
                        <img src={Paper} alt='Paper' />
                        <h4>Paper Trading</h4>
                    </Col>
                    <Col md={3} lg={3}>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={5} lg={5} xs={3}></Col>
                    <Col md={2} lg={2} xs={6} className='p-0'>
                        <Button>Channel List</Button>
                    </Col>
                    <Col md={5} lg={5} xs={3}></Col>
                </Row>
            </Container>

        </div>
    )
}
export default Chanel;
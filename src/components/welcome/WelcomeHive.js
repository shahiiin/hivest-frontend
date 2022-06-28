import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Compani from '../companyName/CompaniName';
import SendMessage from '../sendMessage/SendMessage';
import Skip from '../skip/SkipAll';
import './welcomeHive.scss';

function WelcomeHive(props) {
    return (
        <div className='welcome-hive'>
            <Container>
                <Row>
                    <Col md={10} lg={10}>

                    </Col>
                    <Col md={2} lg={2}>
                        <Skip />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} lg={4}>

                    </Col>
                    <Col md={4} lg={4} className='welcome-colume'>
                        <Compani />
                        <SendMessage/>
                    </Col>
                    <Col md={4} lg={4}>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default WelcomeHive;
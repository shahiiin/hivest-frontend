import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Logo from '../../assets/image/Logo.png';
import './sentEmail.scss';
import Cookies from 'universal-cookie';




let cookies = new Cookies();


function SentEmail(props) {
   
    return (
        <div className='sent-email'>
            <Container fluid>
                <Row>
                   
                    <Col md={12} lg={12} className='login-box'>
                        <Card className='login-card'>
                            <Container>
                                <Row>
                                    <Col md={4} lg={4}></Col>
                                    <Col md={4} lg={4}>
                                        <img src={Logo} alt='Logo' />
                                    </Col>
                                    <Col md={4} lg={4}></Col>
                                </Row>
                            </Container>
                            <h5>Kennstin Hive</h5>
                            <Form>
                                <Container>
                                    <Row>
                                        <Col md={1} lg={1}></Col>
                                        <Col md={10} lg={10}>
                                            <h3>Password reset email sent to your email <br></br>
                                            {/* adress, {cookies.get('userInfo').email}, Follow the <br></br> */}
                                            direction in the email confirm</h3>
                                       
                                        </Col>
                                        <Col md={1} lg={1}></Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Card>
                    </Col>
                 
                </Row>
            </Container>
        </div>
    )
}
export default SentEmail;
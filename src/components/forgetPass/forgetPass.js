import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Logo from '../../assets/image/Logo.png';
import './forgetPass.scss';


function ForgetPass(props) {
    return (
        <div className='forget-pass'>
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
                                            <h3>Please enter the email you used to sign up <br></br>
                                             and we'll send you a link to reset it.</h3>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control type="email" placeholder="Email" />
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Reset
                                            </Button>
                                            <h6><a href='#'>Remember Your Password?</a></h6>
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
export default ForgetPass;
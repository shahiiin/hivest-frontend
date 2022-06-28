import React from 'react';
import { Card, Col, Container, Row, Dropdown } from 'react-bootstrap';
import ApexChart from '../chart/ApexChart';



import './static.scss';


function StaticCard(props) {
    return (
        <div className='static-card'>
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <Card className='total-balance'>
                            <Row>
                                <Col md={5} lg={5}>

                                    <h6>Total balance</h6>
                                    <Row>
                                        <Col md={6} lg={6} xs={7}>
                                            <p>0.00</p>
                                            {/* <span>$ 0.00</span> */}
                                        </Col>
                                        <Col md={6} lg={6} xs={5}>
                                            <Dropdown>
                                                <Dropdown.Toggle className='total-balance-dropdown' id="dropdown-basic">
                                                    USD
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>

                                </Col>


                            </Row>
                            <Row>
                                <Col md={12} xs={12}>
                                    <ApexChart height={90}  />
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                    <Col md={3} lg={3}>
                        <Card className='total-balance'>
                            <Row>
                                <Col md={12} lg={12}>
                                    <h6>Total High Changes</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6} xs={7}>
                                    <p>0.00</p>

                                </Col>
                                <Col md={6} lg={6} xs={5}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='total-balance-dropdown' id="dropdown-basic">
                                            USD
                                      </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12}>
                                    <ApexChart height={90} />
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col md={3} lg={3}>
                        <Card className='total-balance'>
                            <Row>
                                <Col md={12} lg={12}>
                                    <h6>Total Low  Changes</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} lg={6}>
                                    <p>0.00</p>

                                </Col>
                                <Col md={6} lg={6}>
                                    <Dropdown>
                                        <Dropdown.Toggle className='total-balance-dropdown' id="dropdown-basic">
                                            USD
                                      </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} xs={12}>
                                    <ApexChart height={90}/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StaticCard;
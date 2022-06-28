import React from 'react';
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import sell from '../../assets/image/sell.svg';
import Buy from '../../assets/image/Buy.svg';
import Order from '../../assets/image/Order.svg';
import chart from '../../assets/image/chart.svg';
import sunchart from '../../assets/image/sunchart.svg';


import './dashboardHeader.scss';



function DashboardHeader(props) {
    return (
        <div className='dashboard-header'>
            <Container fluid>
                <Row className='wraper-body'>
                    <Col md={4} lg={4}>
                        <h3>Dashboard</h3>
                        <h6>Workspace Board</h6>
                        <Row className='img-wraper'>
                            <Col md={3} lg={3} xs={4}>
                                <img src={sell} alt='sell' className='sell' />
                            </Col>
                            <Col md={3} lg={3} xs={4}>
                                <img src={Buy} alt='Buy' className='Buy' />
                            </Col>
                            <Col md={3} lg={3} xs={4}>
                                <img src={Order} alt='Order' className='Order' />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className='card-body'>
                            <Container>
                                <Row>
                                    <Col md={5} lg={5} xs={5}>
                                        <p>Total balance</p>
                                    </Col>
                                    <Col md={3} lg={3} xs={3}>
                                        <DropdownButton id="dropdown-item-button" title="USD">
                                            <Dropdown.ItemText>USD</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>

                                    <Col md={6} lg={6} xs={8}>
                                        <h4>4 324.53</h4>
                                    </Col>
                                    <Col md={3} lg={3} xs={4} >
                                        <img src={chart} alt='chart' className='chart-img-mob' />
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <img src={chart} alt='chart' className='chart-img' />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md={4} lg={6} xs={6}>
                                        <p>- $ 234.64</p>
                                    </Col>
                                    <Col md={8} lg={6} xs={6}>
                                        <p className='card-param'>-1.12%</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>


                    </Col>
                    <Col md={4} lg={4}>
                        <div className='card-body'>
                            <Container>
                                <Row>
                                    <Col md={7} lg={7} xs={6}>
                                        <p>Your Today revenue</p>
                                    </Col>
                                    <Col md={4} lg={4} xs={3} className='drop-revenue'>
                                        <DropdownButton id="dropdown-item-button" title="USD">
                                            <Dropdown.ItemText>USD</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Action</Dropdown.Item>
                                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                                        </DropdownButton>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>

                                    <Col md={6} lg={6} xs={8}>
                                        <h4>4 324.53</h4>
                                    </Col>
                                    <Col md={3} lg={3} xs={4}>
                                        <img src={sunchart} alt='sunchart' className='chart-img-mob' />
                                    </Col>
                                    <Col md={3} lg={3}>
                                        <img src={sunchart} alt='sunchart' className='chart-img' />
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md={4} lg={6} xs={6}>
                                        <p>- $ 234.64</p>
                                    </Col>
                                    <Col md={8} lg={6} xs={6}>
                                        <p className='card-param'>-1.12%</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DashboardHeader;
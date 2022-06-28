import React from 'react';
import { Col, Container, Row, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import CoinWallet from '../coinWallet/CoinWallet';
import PayChart from '../paychart/PayChart';
import StaticChart from '../staticsChart/StaticChart';
import WallpaperBox from '../wallpaperBox/WallpaperBox';
import './paperTriding.scss';

function PaperTrading(props) {
    return (
        <div className='paper-trading'>
            <div className='paper-trading-border'>
                <Container fluid>
                    <Row>
                        <Col md={10} lg={10} xs={9}>
                            <h3>Name of Channel</h3>


                        </Col>
                        <Col md={2} lg={2} xs={3} className='Dropdown-btn'>

                            <DropdownButton id="dropdown-item-button" title="">
                                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                <Dropdown.Item as="button">Action</Dropdown.Item>
                                <Dropdown.Item as="button">Another action</Dropdown.Item>
                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='start-balance-web'>
                <Row>
                    <Col md={12} lg={12}>
                        <Container>
                            <Row>
                                <Col md={2} lg={2} xs={6}>
                                    <p className='paper-triding-param'>Start Balance</p>
                                </Col>
                                <Col md={4} lg={4} xs={6}>
                                    <p className='paper-triding-param'>Duration</p>
                                </Col>
                                <Col md={2} lg={2} xs={6}>
                                    <p className='paper-triding-param'>Max Asset</p>
                                </Col>
                                <Col md={2} lg={2} xs={6}>


                                </Col>
                            </Row>
                        </Container>
                        <Container className='p-0'>
                            <Row>
                                <Col md={2} lg={2}>
                                    <input placeholder="Value" className='start-balance' />
                                </Col>
                                <Col md={2} lg={2} className='as-date'>

                                    <DropdownButton id="dropdown-item-button" title="2020.10.5" >
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col md={2} lg={2} className='from-date'>
                                    <DropdownButton id="dropdown-item-button" title="2020.10.7">
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col md={2} lg={2} className='choice-mani p-0'>
                                    <DropdownButton id="dropdown-item-button" title="3">
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col md={4} lg={4} className='Execute-btn p-0'>
                                    <Button className='Execute'>Execute</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                </Row>
            </Container>
            <Container className='start-balance-mob'>
                <Row>
                    <Col md={12} lg={12}>
                        <Container>
                            <Row>
                                <Col sx={12}>
                                    <p className='paper-triding-param'>Start Balance</p>
                                </Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>

                                <Col xs={12}>
                                    <input placeholder="Value" className='start-balance' />
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <p className='paper-triding-param'>Duration</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container className='p-0'>
                            <Row>


                                <Col xs={6} className='as-date'>

                                    <DropdownButton id="dropdown-item-button" title="2020.10.5" >
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col xs={6} className='from-date'>
                                    <DropdownButton id="dropdown-item-button" title="2020.10.7">
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>

                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <p className='paper-triding-param'>Max Asset</p>
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>


                                <Col xs={6} className='choice-mani p-0'>
                                    <DropdownButton id="dropdown-item-button" title="3">
                                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                        <Dropdown.Item as="button">Action</Dropdown.Item>
                                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col xs={6} className='Execute-btn p-0'>
                                    <Button className='Execute'>Execute</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>

                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col md={3} lg={3} xs={12} className='pay-chart '>
                        <Row>
                            <Col xs={12} md={12} >
                                <PayChart />
                            </Col>
                            <Col xs={12} md={12}>
                                <CoinWallet />
                            </Col>
                        </Row>


                    </Col>
                    <Col md={6} lg={6}>
                        {/* <ApexChart /> */}
                        <StaticChart/>
                    </Col>
                    <Col md={3} lg={3}>
                        <WallpaperBox />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PaperTrading;
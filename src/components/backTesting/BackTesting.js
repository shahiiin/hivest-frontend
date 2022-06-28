import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownButton, Button, Tabs, Tab } from 'react-bootstrap';
import PayChart from '../paychart/PayChart';
import CoinWallet from '../coinWallet/CoinWallet';
import WallpaperBox from '../wallpaperBox/WallpaperBox';
import hegza from '../../assets/image/hegza1.png';
import hegzagon from '../../assets/image/hegza2.png';
import './backTesting.scss';
import StaticChart from '../staticsChart/StaticChart';
import Comingsoon from '../comingsoon/ComingSoon';
import ChannelPlans from '../chanelPlan/ChannelPlans';
import DayliTraid from '../dayliCard/DayliTraid';

function BackTesting(props) {
    const [key, setKey] = useState('home');
    return (
        <div className='back-testing'>


            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                <Tab eventKey="home" title="Home">
                    <Comingsoon />
                    <div className='opaciti'>
                        <Container className='start-balance-web'>
                            <Row>
                                <Col md={12} lg={12}>

                                    <Container>
                                        <Row>

                                            <Col md={12} lg={12}>
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
                                            </Col>

                                        </Row>
                                    </Container>

                                    <Container>
                                        <Row>
                                            <Col md={2} lg={2}>
                                                <p>Start Balance</p>
                                            </Col>
                                            <Col md={4} lg={4}>
                                                <p>Duration</p>
                                            </Col>
                                            <Col md={2} lg={2}>
                                                <p>Max Asset</p>
                                            </Col>
                                            <Col md={2} lg={2}>


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
                                                <p>Start Balance</p>
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
                                                <p>Duration</p>
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
                                                <p>Max Asset</p>
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

                                <Col md={3} lg={3} className='pay-chart '>
                                    <PayChart />
                                    <CoinWallet />
                                </Col>
                                <Col md={6} lg={6}>

                                    <StaticChart />
                                </Col>
                                <Col md={3} lg={3}>
                                    <WallpaperBox />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>Hello world</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Row>

                        <Col md={12} lg={12}>
                         <ChannelPlans/>
                         <DayliTraid/>
                        </Col>

                    </Row>
                </Tab>
            </Tabs>
        </div>
    )
}
export default BackTesting;
import React from 'react';
import { Container, Row, Col, Navbar, Nav,Tabs,Tab } from 'react-bootstrap';
import AboutCoin from '../../components/aboutCoin/aboutCoin';
import CoinCard from '../../components/coinCard/coinCard';
import CoinHeader from '../../components/coinHeader/coinHeader';
import CoinName from '../../components/coinName/coinName';
import AsideDashboard from './../../components/asideDashboard/AsideDashboard';
import StaticChart from './../../components/staticsChart/StaticChart';
import './coinDetile.scss';



function CionDetile(props) {
    return (
        <div className='coin-detile'>
            <Container fluid>
                <Row>
                    <Col md={12} lg={12}>
                        <div className='bergure'>
                            <Navbar collapseOnSelect expand="lg" bg="dark">
                                <Navbar.Brand href="#home" style={{ color: '#f8c02d', fontSize: 16 }}>KENNSTIN HIVE</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="#features">Dashboard</Nav.Link>
                                        <Nav.Link href="#pricing">Portfolio</Nav.Link>
                                        <Nav.Link href="#features">Coins</Nav.Link>
                                        <Nav.Link href="#pricing">Channels</Nav.Link>
                                        <Nav.Link href="#pricing">Profile</Nav.Link>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row >
                    <Col md={2} lg={2} className='p-0'>
                        <AsideDashboard />
                    </Col>
                    <Col md={10} lg={10}>
                        <CoinName />
                        <div className='coin-chart-box'>
                            <Tabs defaultActiveKey="Charts" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="Charts" title="Charts">
                                    <CoinHeader/>
                                    <StaticChart />
                                    <AboutCoin />
                                </Tab>
                                <Tab eventKey="News" title="News">
                                 <CoinCard/>
                                </Tab>
                             
                            </Tabs>

                        
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CionDetile;
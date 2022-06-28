import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import DayliRiport from '../../components/dayliReport/DayliRiport';
import DayliTable from '../../components/dayliTable/DayliTable';
import './dayliWallet.scss';


function DayliWallet(props) {
    return (
        <div className='dayli-wallet'>
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
                        <DayliRiport />
                        <DayliTable />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default DayliWallet;
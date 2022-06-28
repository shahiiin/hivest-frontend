import React from 'react';
import './profileActive.scss';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import ProfileTable from '../../components/profileTable/ProfileTable';
import Uploading from '../../components/uploading/Uploadin';
import ProfileModal from '../../components/profileModal/ProfileModal';





function ProfileActive(props) {
    return (
        <div className='personal-info'>
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
                <Row>
                    <Col md={2} lg={2} className='p-0'>
                        <AsideDashboard />
                    </Col>
                    <Col md={3} lg={3}>
                        <h1 className='active-title'>Profile</h1>
                        <PersonalInfo />
                    </Col>
                    <Col md={7} lg={7}>
                        <Uploading />
                        <ProfileTable />
                        <ProfileModal/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ProfileActive;
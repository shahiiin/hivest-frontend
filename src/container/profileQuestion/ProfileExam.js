import React from 'react';
import './profileExam.scss';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import ProfileQuestion from '../../components/profileQuestion/ProfileQuestin';
import ProfileHeader from '../../components/profileHeader/ProfileHeader';





function ProfileExam(props) {
    return (
        <div className='profile-exam'>
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
                    <Col lg={10} md={10}>
                        <ProfileHeader />
                        <Row>
                            <Col md={2} lg={2}>
                                <PersonalInfo />
                            </Col>
                            <Col md={10} lg={10}>
                                {/* <Uploading /> */}
                                <ProfileQuestion />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ProfileExam;
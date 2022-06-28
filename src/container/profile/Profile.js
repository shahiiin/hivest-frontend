import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import ProfileHeader from '../../components/profileHeader/ProfileHeader';
import ProfileTable from '../../components/profileTable/ProfileTable';
import './profile.scss';



function Profile(props) {
    console.log("profile render here")
    return (
        <div className='personal-info'>
            <Container fluid>
                <Row>
                    <Col md={2} lg={2} className='p-0'>
                        <AsideDashboard />
                    </Col>
                    <Col md={10} lg={10}>
                        <ProfileHeader />
                        <Row>
                            <Col md={3} lg={3}>
                                <PersonalInfo />
                            </Col>
                            <Col md={9} lg={9} sm={12}>
                                <ProfileTable />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Profile;
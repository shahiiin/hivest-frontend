import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import Chanel from '../../components/chanel/Chanel';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';


function EmptyDAshboard(props) {
    return (
        <div className='dashboard'>
            <Container fluid>
                <Row>
                    <Col md={2} lg={2} className='p-0'>
                        <AsideDashboard />
                    </Col>
                    <Col md={10} lg={10}>
                        <DashboardHeader />
                        <Chanel/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default EmptyDAshboard;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './staticHeader.scss';


function StaticHeader(props) {
    return (
        <div className='static-header'>
            <Container>
                <Row>
                    <Col md={8} lg={8}>
                        <h2>Statistics</h2>
                    </Col>
                    <Col md={4} lg={4}>
                        <button className='dayli'>
                            Day
                        </button>
                        <button className='monthly'>
                            Week
                        </button>
                        <button className='monthly'>
                            Mounth
                        </button>
                        <button className='monthly'>
                            Year
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StaticHeader;
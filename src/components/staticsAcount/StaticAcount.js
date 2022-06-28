import Example  from '../modal/Example';
import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';

import './staticAcount.scss';

function StaticAcount(props) {
    return (
        <div className='static-acount'>
            <Container>
                <Row>
                    <Col md={4} lg={4}></Col>
                    <Col md={4} lg={4}>
                        <h2>Account</h2>
                      
                    </Col>
                    <Col md={4} lg={4}></Col>
                </Row>
                <Row>
                    <Col md={3} lg={3}>

                    </Col>
                    <Col md={6} lg={6}>
                        <p>Lorem ipsum is placeholder text commonly used in the graphic,
                        print, and publishing industries
                        for previewing layouts and visual mockups.
                             </p>
                      
                      <Example/>
                    </Col>
                    <Col md={3} lg={3}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default StaticAcount;
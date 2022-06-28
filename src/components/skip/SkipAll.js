import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './skipAll.scss';

function Skip(props) {
    return (
        <div className='skip-all'>
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <button>Skip All</button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Skip;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './companiName.scss';
import Logo from '../../assets/image/Logo.png' 

function Compani(props) {
    return (
        <div className='compani'>
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <img src={Logo} alt='Logo' />
                        <h1>KENNSTIN HIVE</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Compani;
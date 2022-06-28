import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import './dayliRiport.scss';


function DayliRiport(props) {
    return (
        <div className='dayli-riport'>
            <Container>
                <Row>
                    <Col md={8} lg={8}>
                        <h3>Today's Coin Prices by Kennstin Hive</h3>
                    </Col>
                    <Col md={4} lg={4}>
                        <AiOutlineSearch className='serach-icon'/>
                        <input placeholder='Search...' type='text' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DayliRiport;
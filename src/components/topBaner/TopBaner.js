import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './topBaner.scss';


function TopBaner(props) {
    return (
        <div className='top-baner'>
            <Container>
                <Row>
                    <Col md={1} lg={1}></Col>
                    <Col md={8} lg={8} xs={12} className='banner-content'>
                        <span className='tittle' >GRATZ!  You Got</span>
                        <span className='number' >23</span>
                        <span className='after-number' >USD with </span>
                        <span className='chanel-span' >Channel Name</span>
                        <p>you have used the name of the channel for free and it given you 23 USDT. Now you should pay 10% of that to the outer. 
                            The channel Closes temporarily! As soon as you pay, it will be active again.</p>
                        <button>Pay 2.3 usd</button>
                    </Col>
                    <Col md={3} lg={3}></Col>
                </Row>
            </Container>
        </div>
    )
}
export default TopBaner;
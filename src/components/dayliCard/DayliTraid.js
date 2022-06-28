import React from 'react';
import './dayliTraid.scss';
import { Container, Row, Col } from 'react-bootstrap';


function DayliTraid(props) {
    return (
        <div className='dayli-traid p-0'>
            <Container>
                <Row>

                    <Col md={12} lg={12}>
                        <div className='weekly p-0'>
                            <div className='weekly-header'>
                                <p>Weekly </p>
                            </div>
                            <h1>30<span>$</span></h1>
                            <button className='dayli-tride-btn'>Subscribe</button>
                        </div>

                        <div className='weekly'>
                            <div className='weekly-header'>
                                <p>Monthly</p>
                            </div>
                            <h1>50<span>$</span></h1>
                            <button className='dayli-tride-btn'>Subscribe</button>
                        </div>

                        <div className='weekly'>
                            <div className='weekly-header'>
                                <p>Yearly</p>
                            </div>
                            <h1>300<span>$</span></h1>
                            <button className='dayli-tride-btn'>Subscribe</button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DayliTraid;
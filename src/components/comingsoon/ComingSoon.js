import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './commingSoon.scss';



function Comingsoon(props){
    return(
        <div className='comming-soon'>
            <Container>
                <Row>
                    <Col md={2} lg={2}></Col>
                   <Col md={8} lg={8} className='comming-soon-box'>
                       <h1>Comming soon....</h1>
                   </Col>
                    <Col md={2} lg={2}></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Comingsoon;
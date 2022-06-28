import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import First from './../../assets/image/first.png';
import Second from './../../assets/image/second.png';
import Third from './../../assets/image/third.png';
import Fourth from './../../assets/image/fourth.png';
import './coinCard.scss';


function CoinCard(props) {
    return (
        <div className='coin-card'>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card className='first'>
                            <div className='first-card-header'></div>
                            <p>Bitcoin price at $16K and beyond? Here are the bear and bull cases</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img src={First} alt='first'/>
                                <span>Navid JM</span>
                                <span>1 HOUR AGO</span>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='second'>
                            <div className='second-card-header'></div>
                            <p>Bitcoin price at $16K and beyond? Here are the bear and bull cases</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img src={Second} alt='Second' />
                                <span>Navid JM</span>
                                <span>1 HOUR AGO</span>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='third'>
                            <div className='third-card-header'></div>
                            <p>Bitcoin price at $16K and beyond? Here are the bear and bull cases</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img src={Third} alt='Third' />
                                <span>Mapperson</span>
                                <span>16 HOURS AGO</span>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className='fourth'>
                            <div className='fourth-card-header'></div>
                            <p>Bitcoin price at $16K and beyond? Here are the bear and bull cases</p>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <img src={Fourth} alt='Fourth' />
                                <span>Navid JM</span>
                                <span>1 HOUR AGO</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default CoinCard;
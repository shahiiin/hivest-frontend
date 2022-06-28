import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Arrow from './../../assets/image/Arrow.png';
import bitcoin from './../../assets/image/bitcoin.png';
import Buy from './../../assets/image/Buy.svg';
import Star from './../../assets/image/Star.png';
import Sell from './../../assets/image/sell.svg';
import ApexChart from './../../components/chart/ApexChart';
import './coinName.scss';





function CoinName(props) {
    return (
        <div className='coin-box mt-5'>
            <Container>
                <Row>
                    <Col md={3}>
                        <img src={bitcoin} alt='bitcoin' className='btc-avatar' />

                        <h1>Bitcoin</h1>
                        <img src={Star} alt='Star' className='star'/>
                        <h6>(BTC)</h6>
                        
                        <span>Website</span><img src={Arrow} alt='Arrow' /><br></br>
                        <span>Explore</span><img src={Arrow} alt='Arrow' /><br></br>
                        <span>Message Board</span><img src={Arrow} alt='Arrow' /><br></br>
                        <span> Source Code</span><img src={Arrow} alt='Arrow' /><br></br>
                        <span>Technical Documentation </span><img src={Arrow} alt='Arrow' />

                    </Col>
                    <Col className='mt-3' md={2} xs={6} className='price-box'>
                        <p>Price</p>
                        <span >$ 16,322.66</span>
                        <h5>Market Cap</h5>
                        <span>$302,595,476</span>
                        <h4>2,687,684 BTC</h4>
                    </Col>
                    <Col className='mt-3' md={2} xs={6} className='rank-box'>
                        <p>Rank</p>
                        <span >Rank</span>
                        <h5>Volume</h5>
                        <span>$302,595,476</span>
                    </Col>
                    <Col className='mt-3' md={1} xs={6} className='health-box'>
                        <div style={{ textAlign: 'center' }}>
                            <p>Health</p>
                            <span >Attractive</span>
                            <h5>Volume</h5>
                            <span style={{ color: 'red' }}>-2%</span>
                        </div>
                    </Col>
                    <Col className='mt-3' md={1} xs={6} className='stimat-box'>
                        <p>Sentiment</p>
                        <span >Attractive</span>
                    </Col>
                    <Col md={3} style={{ textAlign: 'center' }} className='logo-box'>
                        <div>
                            <img src={Buy} alt='Buy' className='mt-2 buy-logo'  />
                      
                            <img src={Sell} alt='Sell' className='mt-2 sell-logo' />
                            <ApexChart height={100} width={200} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CoinName;
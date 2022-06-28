import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ETR from '../../assets/image/ETR.svg';
import XRP from '../../assets/image/XRP.svg';
import './coinWallet.scss';



function CoinWallet(props) {
    return (
        <div className='coin-wallet'>
            <Container>
                <Row>
                    <Col md={6} lg={6} xs={6}>
                        <h4>Balance</h4>

                    </Col>
                    <Col md={6} lg={6} xs={6} >
                        <h6>1000 $</h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2} xs={2}>
                        <img src={XRP} alt='XRP' />
                        <img src={ETR} alt='ETR' />
                        <img src={XRP} alt='XRP' />
                        <img src={ETR} alt='ETR' />
                    </Col>
                    <Col md={4} lg={4} xs={6}>
                        <p className='coin-param'>Bitcoin</p>
                        <p className='coin-param'>Ethereum</p>
                        <p className='coin-param'>XRP</p>
                        <p className='coin-param'>DASH</p>
                    </Col>
                    <Col md={6} lg={6} xs={4}>
                        <p className='coin-persent'>40%</p>
                        <p className='coin-persent'>10%</p>
                        <p className='coin-persent'>20%</p>
                        <p className='coin-persent'>30%</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default CoinWallet;
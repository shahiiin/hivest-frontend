import React, { useState } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import coin from '../../assets/image/coin.svg';
import multiCoin from '../../assets/image/multiCoin.svg';
import coinsBox from '../../assets/image/coinsBox.svg';
import './questionCard.scss';



function QuestionCard(props) {
    const [active, setActive] = useState(0);
    const cards = [
        {
            text: 'BTW1001$-',
            textSecond: '10,000$ PM',
            img: coin,


        },
        {
            text: 'BTW1001$-',
            textSecond: '10,000$ PM',
            img: multiCoin,

        },
   
        {
            text: 'BTW1001$-',
            textSecond: '10,000$ PM',
            img: coin,

        },
        {
            text: 'BTW1001$-',
            textSecond: '10,000$ PM',
            img: coinsBox,

        },
        {
            text: 'BTW1001$-',
            textSecond: '10,000$ PM',
            img: coinsBox,

        },
    ]
    const card = cards.map((item, index) => {
        return (
            <Col key={index} md={2} lg={2} xs={12}
                
                onClick={() => setActive(index)} 
                className={`pointer-event path  ${active === index ?  'active-path':''}`}>
                <Row>
                    <Col md={5} lg={5} xs={6}  >
                    </Col>
                    <Col md={7} lg={7} xs={6}>
                        <div className='path-card'>
                            <img src={item.img} alt={item.text} className={item.name, 'coins'} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} lg={8} xs={4}>
                        <p className='mb-0'>{item.text}</p>
                        <p>{item.textSecond}</p>
                    </Col>
                    <Col md={4} lg={4} xs={8}>
                    </Col>
                </Row>
            </Col>
        )
    })

    return (
        <div className='question-card'>
            <Container>
                <Row>
                    {card}
                </Row>
            </Container>
        </div>
    )
}
export default QuestionCard;




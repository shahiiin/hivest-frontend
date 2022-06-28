import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './wallpaperBox.scss';



function WallpaperBox(props) {

    const [active, setActive] = useState(0);
    const numbers = [
        {
            coinName: 'XRP',
            count: 312,
            date: 'Nov, 07, 2018',
            persent: +30,
            volume: 310,
            history: 'Nov, 07, 2018'
        },
        {
            coinName: 'ETH',
            count: 312,
            date: 'Nov, 07, 2018',
            persent: -10,
            volume: 310,
            history: 'Nov, 07, 2018'
        },
        {
            coinName: 'BNB',
            count: 312,
            date: 'Nov, 07, 2018',
            persent: -15,
            volume: 310,
            history: 'Nov, 07, 2018'
        },
    ];

    const listItems = numbers.map((number, index) => {
        return (
            <div>
                <h5 className='coin-name'>{number.coinName}</h5>
                <h6>{number.count}</h6>
                <span>{number.date}</span>
            </div>
        )
    }

    );
    const list = numbers.map((number, index) => {
        return(
            <div>
                <h5 className={number.persent <= 0 ? 'box-persent-deActive ' : ' box-persent-active'}
                    key={index} id={index} >{number.persent}%</h5>
                <h6>{number.volume}</h6>
                <span>{number.history}</span>
            </div>
        )
    
    })




    return (
        <div className='wallpaiper-box'>

            <Container>
                <Row>
                    <Col md={7} lg={7} xs={6}>
                        <h4 className='balance-change'>Balance Change</h4>
                    </Col>
                    <Col md={5} lg={5} xs={6}>
                        <p>(in-time)</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6} lg={6} xs={6} style={{ textAlign: 'center' }}>
                        {listItems}

                    </Col>
                    <Col md={6} lg={6} xs={6} style={{ textAlign: 'center' }}>
                        {list}

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default WallpaperBox;
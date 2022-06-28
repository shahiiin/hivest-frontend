import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Dashboard from '../../assets/image/Dashboard.svg';
import Logo from '../../assets/image/Logo.png';
import ChannelsActive from '../../assets/image/Channels-active.svg';
import PortfolioActive from '../../assets/image/Portfolio-active.svg';
import CoinsActive from '../../assets/image/Coins-active.svg';
import ProfileActive from '../../assets/image/Profile-active.svg';
import Active from '../../assets/image/Active.svg';
import Coins from '../../assets/image/Coins.svg';
import Channel from '../../assets/image/Channel.svg';
import User from '../../assets/image/User.svg';
import './asideDashboard.scss';
import { Link } from 'react-router-dom';



function AsideDashboard(props) {
    const [active, setActive] = useState(1);
    function handleClickMenu(index) {
        setActive(index)
    }
    const items = [
        {
            name: 'KENNSTIN HIVE',
            src: Logo,
            link: '/Welcome',
        },
        {
            name: 'Portfolio',
            src: Dashboard,
            link: '/profilepayment',
            icon: Active,
        },
        {
            name: 'Coin',
            src: Coins,
            link: '/coinDetile',
            icon: CoinsActive,
        },
        {
            name: 'Chanels',
            src: Channel,
            link: '/chanelBoard',
            icon: ChannelsActive,
        },
        {
            name: 'Profile',
            src: User,
            link: '/profileActive',
            icon: ProfileActive,
        },
    ]
    const listItems = items.map((item, index) => {
        if (item.name === 'KENNSTIN HIVE') {
            return (
                <div key={index} className='aside-kennestin'>
                    <Link to={item.link}>
                        <Row>
                            <Col md={3} className='kennestin-logo'>
                                <img src={item.src} alt="item.src" className='image-fluid' />
                            </Col>
                            <Col md={9}>
                                <h5 key='index'>{item.name}</h5>
                            </Col>
                        </Row>
                    </Link>
                </div>
            )
        } else {
            return (
                <div id={index} name={index} key={index} className='menu' onClick={() => setActive(index)}>
                    <Link to={item.link}

                        className={active !== index ? 'menu-item menu-item-active' : 'menu-item menu-item-deactive'}>
                        <img src={active !== index ? item.src : item.icon} alt={item.name} Active />
                        <p className='mb-0'>{item.name}</p>
                    </Link>
                </div>
            )
        }
    }
    );
    return (
        <div className='aside-dashboard'>
            <Container fluid>
                <Row className='aside-dashboard-content'>
                    <Col md={12} >
                        {listItems}
                    </Col>
                </Row>
            </Container>
        </div>



    )
}
export default AsideDashboard;
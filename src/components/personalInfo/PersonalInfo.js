import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './personalInfo.scss';
import { NavLink} from 'react-router-dom'




function PersonalInfo(props) {
    const [active, setActive] = useState(0)
    let toggleClass = (index) => {
        setActive(index)
    }
    return (
        <div className='personal-info '>
            <Container fluid>
                <Row >
                    <Col md={12} lg={12}>
                        <div className='profile-walpaper'>
                            <ul className='navbar-nav'>
                                <Row>
                                    <li className='nav-item'  >
                                        <NavLink onClick={() => toggleClass(0)} className={active === 0 ? 'menu-item menu-item-active nav-link active' : 'menu-item-deactive deactive nav-link'} to='/profile' exact>Personal Info </NavLink>
                                    </li>
                                </Row>
                                <Row>
                                    <li className='nav-item'  >
                                        <NavLink onClick={() => toggleClass(1)} className={active === 1 ? 'menu-item menu-item-active nav-link active' : 'menu-item-deactive deactive nav-link'} to='/profilepayment' exact>Payments History</NavLink>
                                    </li>
                                </Row>
                                <Row>
                                    <li className='nav-item'>
                                        <NavLink className='nav-link' to='/profileActive' exact>Profits History</NavLink>
                                    </li>
                                </Row>
                                <Row>
                                    <li className='nav-item' >
                                        <NavLink onClick={() => toggleClass(2)} className={active === 2 ? 'menu-item menu-item-active nav-link active' : 'menu-item-deactive deactive nav-link'} to='/profileQuestions'>Questions</NavLink>
                                    </li>
                                </Row>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PersonalInfo;
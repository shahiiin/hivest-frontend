import React, { useState } from 'react';
import './question.scss';

import Logo from '../../assets/image/Logo.png';
import { Col, Container, Row } from 'react-bootstrap';


function Question(props) {
    const [active, setActive] = useState(0);
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const listItems = numbers.map((number, index) =>

        <li className='step ' onClick={() => setActive(index)} className={active !== index ? 'step ' : 'active-step '} key={index} id={index} >{number}</li >
    );




    return (

        <div className='question'>
            <Container>
                <Row>
                    <Col md={12} lg={12} xs={12} className='question-masage'>
                        <img src={Logo} alt='Logo' className='logo-hive' />
                        <h2>KENNSTIN HIVE</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={12} xs={12} >
                        <ul>
                            {listItems}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Question;
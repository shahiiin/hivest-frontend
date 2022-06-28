import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import './example.scss';
import Exchange from '../../assets/image/Exchange.svg';



function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='open-modal' onClick={handleShow}>Sync with your exchange</button>
            <Modal show={show} onHide={handleClose}>
                <Container>
                    <Row>
                        <Col md={2} lg={2}>
                            <button className='close-btn' onClick={handleClose}>x</button>
                        </Col>
                        <Col md={8} lg={8} className='example-modal'>
                            <img src={Exchange} alt='Exchange' className='Exchange-icon' />
                            <h2>Exchange List</h2>
                            <p>Select your exchange and continue</p>
                            <button className='binance-btn'>Binance </button>
                          
                            <button className='coming-soon'>Coming Soon ...</button>
                        </Col>
                        <Col md={2} lg={2}></Col>
                    </Row>
                </Container>
            </Modal>
        </>
    );
}

export default Example;
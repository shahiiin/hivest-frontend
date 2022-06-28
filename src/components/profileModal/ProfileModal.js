import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import './profileModal.scss';


function ProfileModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Container>
                <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
                <Modal show={show} onHide={handleClose}>
                    <div className='profile-modal'>
                        <Modal.Body>
                            <Row>
                                <Col md={2} lg={2}>
                                    <Button className='close-btn' variant="secondary" onClick={handleClose}>x</Button>
                                </Col>
                                <Col md={8} lg={8}>
                                    <h1 className='modal-title'>Username</h1>
                                    <p className='modal-param'>API-Key</p>
                                    <input className='profile-modal-inp' type='text' placeholder='Ex:' />
                                    <p className='modal-param'>Start Balance</p>
                                    <input className='profile-modal-inp' type='text' placeholder='Ex:' />
                                    <Button className='profile-subcribe' onClick={handleClose}>Save Changes</Button>
                                </Col>
                                <Col md={2} lg={2}>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </div>
                </Modal>
            </Container>
        </div>
    )
}
export default ProfileModal;
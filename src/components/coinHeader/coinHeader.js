import React from 'react';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import './coinHeader.scss';


function CoinHeader(props) {
    return (
        <div className='coin-header'>
            <Container>
                <Row>
                    <Col md={2}>
                        <h4>Bitcoin Charts</h4>
                    </Col>
                    <Col md={1} xs={4}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Day
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1} xs={4}>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-drop' id="dropdown-basic">
                                Week
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1} xs={4}>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-drop' id="dropdown-basic">
                                Mounth
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1} xs={6}>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-drop' id="dropdown-basic">
                                Year
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={1} xs={6}>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-drop' id="dropdown-basic">
                                All
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={2} xs={6}>
                        <p></p>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-time' id="dropdown-basic">
                                Start Day
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={2} xs={6}>
                        <p></p>
                        <Dropdown>
                            <Dropdown.Toggle className='dayli-time' id="dropdown-basic">
                                End Date
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CoinHeader;
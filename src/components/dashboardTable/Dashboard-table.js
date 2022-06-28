import React, { useState } from 'react';
import { Button, Col, Container, Row, Dropdown, DropdownButton, Table } from 'react-bootstrap';
import ETR from '../../assets/image/ETR.svg';
import BUY from '../../assets/image/Buy Icon.svg';
import XRP from '../../assets/image/XRP.svg';
import Sell from '../../assets/image/Sell Icon.svg';
import './dashboardTable.scss';


function DashboradTable(props) {
    const [active, setActive] = useState(0);
    const numbers = [
        {
            Name: 'XRP',
            Src: XRP,
            Logo: Sell,
            Order: 'sell',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: +30
        },
        {
            Name: 'ETH',
            Src: ETR,
            Logo: BUY,
            Order: 'Buy',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: -10
        },
        {
            Name: 'XRP',
            Src: XRP,
            Logo: Sell,
            Order: 'sell',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: +30
        },
        {
            Name: 'ETH',
            Src: ETR,
            Logo: BUY,
            Order: 'Buy',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: -10
        },
        {
            Name: 'XRP',
            Src: XRP,
            Logo: Sell,
            Order: 'sell',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: +30
        },
        {
            Name: 'ETH',
            Src: ETR,
            Logo: BUY,
            Order: 'Buy',
            Traiding: 312,
            Closing: 'Nov, 07, 2018',
            LastAction: 'Nov, 01, 2018',
            Profit: -10
        },
    ]
    const listItems = numbers.map((number, index) => {
        return (
            <Table striped bordered hover variant="dark">

                <tr>
                    <th><img src={number.Src} alt='number.Src' />{number.Name}</th>
                    <td><img src={number.Logo} alt='number.Src' />{number.Order}</td>
                   
                    <td>{number.Traiding}</td>
                    <td>{number.LastAction}</td>
                    <td>{number.Closing}</td>
                    <td className={number.Profit <= 0 ? 'mainez' : 'pluse'}
                        key={index} id={index}>{number.Profit}</td>
                </tr>

            </Table>
        )
    })
    return (
        <div className='dashboard-table'>
            <Container fluid>
                <Row>
                    <Col md={10} lg={10} xs={6}>
                        <h3 className='dashboard-table-param'>My Channel</h3>
                    </Col>
                    <Col md={2} lg={2} xs={6} className='table-btn'>
                        <Button>Channel List</Button>
                    </Col>
                </Row>
            </Container>
            <div className='table-content'>
                <div className='bord-table'>
                    <Container fluid>
                        <Row>
                            <Col md={10} lg={10} xs={8}>
                                <h3>Name of Channel</h3>
                            </Col>
                            <Col md={2} lg={2} xs={4} className='Dropdown-btn'>
                                <DropdownButton id="dropdown-item-button" title="">
                                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col md={1} lg={1}></Col>
                        <Col md={10} lg={10}>
                            <p>Balance Change<span>(in-time)</span></p>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                       <th>{listItems}</th>
                                    </tr>
                                </thead>
                            
                            </Table>
                        </Col>
                        
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default DashboradTable;
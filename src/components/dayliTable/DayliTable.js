import React from 'react';
import { Button, Col, Container, Row,Table } from 'react-bootstrap';
import ApexChart from '../chart/ApexChart';

import './dayliTable.scss';


function DayliTable(props) {
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

                <Container>
                    <Row>
                        <Col md={12} lg={12}>
                            <p>Balance Change<span>(in-time)</span></p>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Health</th>
                                        <th>Sentiment</th>
                                        <th>Volume</th>
                                        <th>24h</th>
                                        <th>7d</th>
                                        <th>Last 7 Days</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bitcoin
                                            <span>(BTC)</span>
                                        </td>
                                        <td>$12,935.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td style={{textAlign:'center'}}>
                                            <ApexChart height={50} width={110}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Ethereum
                                            <span>(ETH)</span>
                                        </td>
                                        <td>$415.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>tether
                                            <span>(USDT)</span>
                                        </td>
                                        <td>$1.00</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$50,358,910,770<br></br>
                                            <span>50,322,957,567 USDT</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>XRP
                                            <span>(XRP)</span>
                                        </td>
                                        <td>$415.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Bitcoin Cash
                                            <span>(BTC)</span>
                                        </td>
                                        <td>$415.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Chainlink
                                            <span>(LINK)</span>
                                        </td>
                                        <td>$415.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Binance Coin
                                            <span>(BNB)</span>
                                        </td>
                                        <td>$415.5</td>
                                        <td>Attractive</td>
                                        <td>Attractive</td>
                                        <td>$34,765,345,934<br></br>
                                            <span>2,687,684 BTC</span>
                                        </td>
                                        <td>+7%</td>
                                        <td>-2%</td>
                                        <td>
                                            <ApexChart height={50} width={110} />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
export default DayliTable;
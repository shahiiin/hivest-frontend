import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import './chanelCard.scss';
import Cookies from 'universal-cookie';









function ChanelCard(props) {



    const cookies = new Cookies();
    const [data, setData] = useState([]);

    let token = cookies.get('token');
    useEffect(() => {
        fetch("https://apid.hivest.ai/channel/channel_list/", {
            headers: {
                "Authorization": "JWT " + token.data.token,
                "Content-Type": "application/json",

            },
        })
            .then(res => res.json())
            .then((res) => {
                setData(res.data);
                console.log(data, "data is here");
                console.log(res.data, "response is here");
            }).catch(err => console.log(err))

    }, []);



    return (
        <div className='chanle-card'>
            <Container fluid>

                <Row>
                    <Col md={8} lg={8} xs={12}>
                        <h3>Channels</h3>
                    </Col>
                    <Col md={4} lg={4} xs={12}>
                        <BiSearch />
                        <input placeholder='search...' />
                    </Col>
                </Row>
                <Row>
                    {data.map(item => (
                        <Col key={item.id} md={4} lg={4}>
                            <Card className='chanel-card-1'>
                                <div className='card-pic'>
                                    <h4>{item.title}</h4>
                                    <h5>{item.exchange_type}</h5>
                                </div>
                                <Row className='last-porofit'>
                                    <Col md={8} lg={8} xs={8}>
                                        <p>Last profit:<span>+3%</span></p>
                                        <button className='spot'>spot</button>
                                    </Col>
                                    <Col md={4} lg={4} xs={4}>
                                        <h6>23.2$</h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} lg={4} xs={4}>
                                        <p className='base-market'>{item.base_market}</p>

                                        <h2>{item.channel_type}</h2>
                                    </Col>
                                    <Col md={4} lg={4} xs={4} className='market-border'>
                                        <p className='base-market'>Name of SUB</p>
                                        <h2>134</h2>
                                    </Col>
                                    <Col md={4} lg={4} xs={4}>
                                        <p className='base-market'>{item.risk}</p>
                                        <h2>Medium</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={1} lg={1} xs={1}>

                                    </Col>
                                    <Col md={10} lg={10} xs={10}>
                                        <button className='Subscribed'>
                                            <a target="_self" href={`/chanels/${item.id}`} >Subscribed</a>
                                        </button>

                                        <button className='read-more'>Read more</button>
                                    </Col>
                                    <Col md={1} lg={1} xs={1}>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )


}
export default ChanelCard;
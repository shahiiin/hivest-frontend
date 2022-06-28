import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import photo from '../../assets/image/photo.png';
import Cookies from 'universal-cookie';
import {apiUrl} from './../../config.json'
import axios from 'axios';

import './chanelName.scss';
const cookies = new Cookies();

function ChanelName(props) {
    const [data, setData] = useState(null)
    const [Channels, setChannels] = useState(null)
    const apiEndpoint = `${apiUrl}/channel/channel_list/`;
    let token = cookies.get('token')

    console.log(token, 'tdwadwada  wdoken');
    let channels = null;
    console.log(token.data)
    console.log(token.data.token)




    axios.get(apiEndpoint,{

        headers: {
            "Authorization": "JWT " + token.data.token,
            "Content-Type": "application/json",

        },
    },[])
        .then(function (response) {

            console.log(response, 'aa');
            setChannels(response.data.data)
            const Channel = response.data.data[0]
            console.log(Channel, 'iraj')
            console.log(response.data.data, 'aaaaa')
            



        })
        .catch(function (error) {

            console.log(error);
        })



    return (
        <div className='chanel-name'>

            <Container fluid>
          <Row>

                        <Col md={4} lg={4}>
                            <img src={photo} alt='photo' />
                        <h2>Name of channel</h2>
                        <p className='chanel-param'>Name of auther</p>
                  
                        <h6> Free <span>+20%</span></h6>
                      
                        <h4> </h4>
                            <button className='chanel-btn'>Subscrib</button>

                        </Col>
                        <Col md={8} lg={8}>

                            <Row>
                                <Col md={1} lg={1}>

                                </Col>
                                <Col md={2} lg={2} xs={4}>
                                    <p className='market-param'></p>
                                    <button className='volume-btn'>Spot</button>
                                </Col>
                                <Col md={2} lg={2} xs={4}>
                                    <p className='market-param'>Market Base</p>
                                    <p className='coin-name'>PAN - BTC</p>
                                </Col>
                                <Col md={2} lg={2} xs={4}>
                                    <p className='market-param'>Last Profit</p>
                                    <p className='last-profile'>+3% </p>
                                </Col>
                                <Col md={2} lg={2} xs={5}>
                                    <p className='market-param'>Risk</p>
                                    <p className='risk'>Medium</p>
                                </Col>
                                <Col md={2} lg={2} xs={5}>
                                    <p className='market-param'>Num OF SUB</p>
                                    <p className='coin-name'>134</p>
                                </Col>
                                <Col md={1} lg={1}>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={1} lg={1}>

                                </Col>
                                <Col md={2} lg={2}>
                                    <h3 className='discript'>Discriptions</h3>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={1} lg={1}></Col>
                                <Col md={11} lg={11}>
                                    <h3 className='discript-content'>
                                        Lorem  Ipsum  is  simply dummy text of the printing and typesetting industry. Lorem I,knpsum has  </h3>
                                    <h3 className='discript-content'> been the industry's standard dummy te cxt ever since the 1500s, when an unknown printer took </h3>
                                    <h3 className='discript-content'>  a galley of type and scrambled it to make a type specimen book. It has survived noskt only ficd </h3>
                                    <h3 className='discript-content'>   ve centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It  </h3>
                                    <h3 className='discript-content'>  was popularised in the 1960s with the release of Lap into electronic typesetting, remadknlf  </h3>
                                    <h3 className='discript-content'>  fssining essentially unchanged. It was popularised in the 1960s with the release dof </h3>
                                    <h3 className='discript-content'>  Letrassjbset sheets containing Lorem Ipsum passages, and more recently with desktop </h3>
                                    <h3 className='discript-content'>  pubknslflishing software like Aldus PageMaker including ver csions of Lorem Ipsum. </h3>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                }
            </Container>

        </div>

    )
}
export default withRouter(ChanelName);
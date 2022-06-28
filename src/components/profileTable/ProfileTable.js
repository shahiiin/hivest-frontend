import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table, Image } from 'react-bootstrap';
import './profileTable.scss';
import Cookies from 'universal-cookie';
import edit from './edit.png'


function ProfileTable(props) {
    const cookies = new Cookies();
    const [data, setData] = useState([]);

    let token = cookies.get('token');
    useEffect(() => {

        if (token !== null) {

            fetch("https://apid.hivest.ai/authnz/my_profile/", {

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
        }



    }, []);


    return (
        <div className='profile-table'>
            <Container >
                <Row>
                    <Col lg={12} md={10} sm={10} className='profile-info-box'>
                        <Row>
                            <Col lg={12}>
                                <p className='personal-info-header'>Personal Info</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Table responsive="sm" lg={12}>
                                    <thead>
                                        <tr>
                                          
                                            <th>Username</th>
                                            <th>Aqua</th>
                                            <th className='edit' style={{ color: '#155EBB' }}><span><Image src={edit} /></span>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                           
                                            <td>Email</td>
                                            <td>{data.email}</td>
                                            <td className='edit' style={{ color: '#155EBB' }}><span><Image src={edit} /></span>Edit</td>

                                        </tr>
                                        <tr>
                                         
                                            <td>Phone number</td>
                                            <td>------</td>
                                            <td className='edit' style={{ color: '#155EBB' }}><span><Image src={edit} /></span>Edit</td>
                                        </tr>
                                        <tr>
                                          
                                            <td>First Name</td>
                                            <td>
                                                {data.first_name}
                                            </td>
                                            <td className='edit' style={{ color: '#155EBB' }}><span><Image src={edit} /></span>Edit</td>
                                        </tr>
                                        <tr>
                                         
                                            <td>Last name</td>
                                            <td>{data.last_name}</td>
                                            <td className='edit' style={{ color: '#155EBB' }}><span><Image src={edit} /></span>Edit</td>
                                        </tr>
                                        <tr>
                                          
                                            <td style={{ border: 'none' }}>Password</td>
                                            <td style={{ border: 'none' }}>******</td>
                                            <td className='edit' style={{ color: '#155EBB', border: 'none' }}><span><Image src={edit} /></span>Edit</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default ProfileTable;
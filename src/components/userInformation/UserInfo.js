import React, { useState, useEffect } from 'react';
import { Container, Row, Table, Col } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import 'react-notifications-component/dist/scss/notification.scss';
import { useHistory } from 'react-router';
import axios from 'axios';
import './userInfo.scss';
import 'react-toastify/dist/ReactToastify.css';


function UserInfo(props) {

    let history = useHistory();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [username, setusername] = useState();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [phonenumber, setphonenumber] = useState();

    const cookies = new Cookies();



    const setemailChange = e => {
        console.log(e.target.value, 'email change');
        setemail(e.target.value);
    };
    const setusernameChange = e => {
        console.log(e.target.value, 'userName change');
        setusername(e.target.value);
    };
    const setlastnameChange = e => {
        console.log(e.target.value, 'lastName change');
        setlastname(e.target.value);
    };
    const setfirtsnameChange = e => {
        console.log(e.target.value, 'fristName change');
        setfirstname(e.target.value);
    };
    const setpasswordChange = e => {
        console.log(e.target.value, 'password change');
        setpassword(e.target.value);
    };
    const setphonenumberdChange = e => {
        console.log(e.target.value, 'phoneNumber change');
        setphonenumber(e.target.value);
    };
    function timeout(delay) {
        return new Promise(res => setTimeout(res, delay));
    }

    const handleSubmit = e => {
        e.preventDefault();

        let token = cookies.get('token');
        console.log(token, "token is here")
        axios.patch('https://apid.hivest.ai/authnz/my_profile/',

            {
                "email": email,
                "email_confirmed": true,
                "mobile": phonenumber,
                "mobile_confirmed": true,
                "api_secret": "string",
                "api_key": "string",
                "first_name": firstname,
                "last_name": lastname,
                "wallet_address": ""
            },
            {
                headers: {
                    "Authorization": "JWT " + token.data.token,
                    "Content-Type": "application/json",
                },
            })
            .then(async (response) => {
                console.log(response, "response")

                console.log(this, history, "history is here")

                cookies.set("userInfo", response.data.data)
                console.log(cookies.get("userInfo"), "nfo cookies")

                await timeout(1000, history.push("/profile"));

            })
            .catch((error) => {
                console.log(error)

            })

    };

    return (
        <div className='user-info'>
            <Container>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='user-name-param'>Username</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='user-name-inp' onChange={e => setusernameChange(e)} type='text' />
                    </Col>
                    <Col md={2} lg={2}>
                    </Col>

                </Row>
                <hr></hr>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='email-profile-param'>Email</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='email-profile-inp' onChange={e => setemailChange(e)} type='text' />
                    </Col>
                    <Col md={2} lg={2}>
                        <p className='email-profile-param'>Verifed</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='email-profile-param'>Phone number</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='email-profile-inp' onChange={e => setphonenumberdChange(e)} type='text' />
                    </Col>
                    <Col md={2} lg={2}>
                        <p className='email-profile-param'>NotVerifed</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='email-profile-param'>First Name</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='email-profile-inp' onChange={e => setfirtsnameChange(e)} type='text' />
                    </Col>
                    <Col md={2} lg={2}>

                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='email-profile-param'>Last name</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='email-profile-inp' onChange={e => setlastnameChange(e)} type='text' />
                    </Col>
                    <Col md={2} lg={2}>
                        <p className='email-profile-param'>name exist</p>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col md={3} lg={3}>
                        <p className='email-profile-param'>Password</p>
                    </Col>
                    <Col md={7} lg={7}>
                        <input className='email-profile-inp' onChange={e => setpasswordChange(e)} type='password' />
                    </Col>
                    <Col md={2} lg={2}>
                        <p className='email-profile-param'>Edit</p>
                    </Col>
                </Row>
                <hr></hr>
                <button onClick={e => handleSubmit(e)}>click me</button>
            </Container>
        </div>
    )
}
export default UserInfo;
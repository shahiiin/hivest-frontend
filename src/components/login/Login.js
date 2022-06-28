import React from "react";
import useForm from "./../../hooks/useForm";
// css
import "./login.scss";

// useless
import Logo from "../../assets/image/Logo.png";

// 3rd-parties
import Cookies from "universal-cookie";
import {useHistory} from "react-router";
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";
import axios from "axios";
import {store} from "react-notifications-component";

import {apiUrl} from "./../../config.json";

function Login(props) {
    let history = useHistory();
    const cookies = new Cookies();

    const apiEndpoint = `${apiUrl}/authnz/login_email/`;
    const {handleChange, inputs, resetForm} = useForm({
        email: "",
        password: "",
    });

    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // validation
        // post

        axios
            .post(
                apiEndpoint,
                {
                    email: inputs.email,
                    password: inputs.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        accept: "application/json",
                    },
                }
            )
            .then(async (response) => {
                console.log(response);
                const token = response.data;
                console.log(token, "token");

                cookies.set("token", token);
                store.addNotification({
                    title: "Wonderful!",
                    message: "You are successfully logined.",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
                await timeout(1000);
                history.push("/profile");

                return token;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login">
            <Container fluid>
                <Row>
                    <Col md={12} lg={12} className="login-box">
                        <Card className="login-card">
                            <Container>
                                <Row>
                                    <Col md={4} lg={4}></Col>
                                    <Col md={4} lg={4}>
                                        <img src={Logo} alt="Logo" className="logo"/>
                                    </Col>
                                    <Col md={4} lg={4}></Col>
                                </Row>
                            </Container>

                            <h5>Login to Kennstin Hive</h5>
                            <Form>
                                <Container>
                                    <Row>
                                        <Col md={1} lg={1}></Col>
                                        <Col md={10} lg={10}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    onChange={handleChange}
                                                    value={inputs.email}
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control
                                                    value={inputs.password}
                                                    name="password"
                                                    onChange={handleChange}
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            </Form.Group>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Login
                                            </Button>
                                            <h6>
                                                Don't Have an Account?{" "}<a href="/register">Sign up</a>
                                            </h6>
                                        </Col>
                                        <Col md={1} lg={1}></Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;

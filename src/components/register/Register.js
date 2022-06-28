import React from "react";
import {Container, Row, Col, Card, Form, Button} from "react-bootstrap";
import {useHistory} from "react-router";
import Logo from "../../assets/image/Logo.png";
import "./register.scss";
import {apiUrl} from "./../../config.json";
import axios from "axios";
import useForm from './../../hooks/useForm'
import {store} from "react-notifications-component";

function Register() {
    let history = useHistory();
    const {handleChange, inputs, resetForm} = useForm({
        email: '',
        password: '',
    })
    const apiEndpoint = `${apiUrl}/authnz/register_email/`;
    const handleSubmit = async (e) => {
        e.preventDefault();
        // todo: validation
        if (inputs.name === "" || inputs.password === "")
            return

        // todo: post
        try {
            const response = await axios.post(apiEndpoint, inputs)
            if (response?.data?.success === true) {
                store.addNotification({
                    title: "Successful",
                    message: `Please check your email ${inputs.email} to login to Kennstin Hive `,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });
                history.push("/login")
            }
        } catch (e) {
            // todo: save to logger
            console.log(e.message)
        }
    };

    return (
        <div className="register">
            <Container fluid>
                <Row>
                    <Col md={12} lg={12} className="login-box">
                        <Card className="login-card">
                            <Container>
                                <Row>
                                    <Col md={4} lg={4}></Col>
                                    <Col md={4} lg={4}>
                                        <img src={Logo} alt="Logo"/>
                                    </Col>
                                    <Col md={4} lg={4}></Col>
                                </Row>
                            </Container>

                            <h5>Kennstin Hive</h5>
                            <Form>
                                <Container>
                                    <Row>
                                        <Col md={1} lg={1}></Col>
                                        <Col md={10} lg={10}>
                                            <Form.Group controlId="formBasicUser">
                                                <Form.Control
                                                    onChange={handleChange}
                                                    type="email"
                                                    placeholder="UserName"
                                                    name="email"
                                                    value={inputs.email}
                                                />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Control
                                                    type="password"
                                                    value={inputs.password}
                                                    name="password"
                                                    onChange={handleChange}
                                                    placeholder="Password"
                                                />
                                            </Form.Group>

                                            <Button
                                                onClick={(e) => handleSubmit(e)}
                                                variant="primary"
                                                type="submit"
                                            >
                                                Register
                                            </Button>
                                            <h6>
                                                Or{" "}<a href="/login">You Already Have Acount?</a>
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

export default Register;

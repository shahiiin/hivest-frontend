import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './profileHeader.scss';


function ProfileHeader(props) {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    }
    return (
        <div className='profile-header'>
            <Container fluid>
                <Row>
                    <Col md={12} lg={12}>
                        <Row>
                            <Col lg={2} md={2}>
                                <h1 className='header-title'>Profile</h1>
                            </Col>
                            <Col md={2} lg={1}>
                                <div className="previewProfilePic">
                                    <img className="playerProfilePic_home_tile" src={imgData} />
                                </div>
                            </Col>
                            <Col md={6} lg={6}>
                                <div className="register_profile_image">
                                    <input id="profilePic" type="file" onChange={onChangePicture} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default ProfileHeader;
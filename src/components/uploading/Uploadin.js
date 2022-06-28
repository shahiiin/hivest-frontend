import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './uploading.scss';


function Uploading(props) {
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
        <div className='uploading'>
            <Container>
                <Row>
                    <Col md={8} lg={8}>

                        <Row>
                            <Col md={2} lg={2}>
                                <div className="previewProfilePic">
                                    {/* <img src={upload} alt='upload' className='upload-avatar'/> */}
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
export default Uploading;
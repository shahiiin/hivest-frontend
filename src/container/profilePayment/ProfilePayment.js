import React from 'react';
import './profilePayment.scss';
import { Container, Row, Col, Navbar, Nav, Table } from 'react-bootstrap';
import AsideDashboard from '../../components/asideDashboard/AsideDashboard';
import PersonalInfo from '../../components/personalInfo/PersonalInfo';
import ProfileHeader from '../../components/profileHeader/ProfileHeader';




function ProfileInformation(props) {


    const items = [
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        },
        {
            amount: '$30.00',
            date: 'Nov, 07, 2018',
            isproved: 'YES',
            txid: '875487548',
            srcadd: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223',
            destaddress: '0xbcd69fb83b449ec8798e417fec00d5bb6bf63223'
        }
    ]
    const listItem = items.map((item, index) => {
        return (
            <tbody>
                <tr className={index % 2 == 0 ? 'bg' : 'bg-1'}>
                    <td>
                        {item.amount}
                    </td>
                    <td>
                        {item.date}
                    </td>
                    <td style={{ color: '#49DF3E' }}>
                        {item.isproved}
                    </td>
                    <td>
                        {item.txid}
                    </td>
                    <td className='long-txt'>
                        {item.srcadd}
                    </td>
                    <td className='long-txt'>
                        {item.destaddress}
                    </td>
                </tr>
            </tbody>
        )
    })

    return (
        <div className='profile-information'>
            <Container fluid>
                <Row>
                    <Col md={2} lg={2} className='p-0'>
                        <AsideDashboard />
                    </Col>
                    <Col md={10} lg={10} className='payment'>
                        <ProfileHeader />
                        <Row>
                            <Col md={3} lg={3}>
                                <PersonalInfo />
                            </Col>
                            <Col md={9} lg={9} sm={12}>
                                <Row>
                                    <Col lg={12} md={12}>
                                        <Table responsive="sm" lg={12} striped hover>
                                            <thead>
                                                <tr>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Is Approved</th>
                                                    <th>TxID</th>
                                                    <th>Source Add</th>
                                                    <th>Dest Address</th>
                                                </tr>
                                            </thead>
                                            {listItem}
                                        </Table>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ProfileInformation;
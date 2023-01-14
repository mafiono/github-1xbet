import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'
import { MessageCircle, Mail, Phone } from 'react-feather'

export class About extends Component {
    render() {
        return (
            <div className='justify-content-center d-flex'>
                <Row className='ml-0 mr-0 pt-2' style={{maxWidth:'1200px', width:'100%'}}>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>Contacts</h1>
                    </Col>
                    <Col sm='12' className='mt-4 mb-5'>
                        <Row>
                            <Col sm='4' xs='12'>
                                <MessageCircle size={60} className='m-1'/>
                                <h3>LIVE SUPPORT</h3>
                                <p className='mt-1'>The Live Support team will help you with any questions and will provide proper assistance 24/7.</p>
                            </Col>
                            <Col sm='4' xs='12'>
                                <Mail size={60} className='m-1'/>
                                <h3>E-MAIL</h3>
                                <p className='mt-1'>
                                    For customer inquiries, please contact support@kasino9.com . When contacting, you must indicate your name and account number.<br/><br/>
                                    For all other questions and for more information on our terms and conditions and betting rules, please contact info@kasino9.com by e- mail  .<br/><br/>
                                    Please send verification documents to   docs@kasino9.com .
                                </p>
                            </Col>
                            <Col sm='4' xs='12'>
                                <Phone size={60} className='m-1'/>
                                <h3>PHONE</h3>
                                <p className='mt-1'>+91000000000</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

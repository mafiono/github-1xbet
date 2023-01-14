import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'

export class About extends Component {
    render() {
        return (
            <div className='justify-content-center d-flex'>
                <Row className='ml-0 mr-0 pt-2' style={{maxWidth:'1200px', width:'100%'}}>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>About us</h1>
                    </Col>
                    <Col sm='12' className='mt-4'>
                        <p>
                            We pride ourselves on being a fun and friendly company who do what’s best for our customers.<br/>
                            Using advance gaming software and single wallet technology, we are able to bring you pure entertainment and the best gaming experience available online!
                        </p>
                    </Col>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>Product offering:</h1>
                        <h1 className='d-flex justify-content-start'>Betting & Live Betting</h1>
                    </Col>
                    <Col sm='12' className='mt-1'>
                        <p>
                            We have a complete sports offer, with over 40 types of bets per event.<br/>
                            We currently offer 3000 live betting events per month. Later this year we will offer 4500 live events across all sports.
                        </p>
                    </Col>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>Casino, and Games</h1>
                    </Col>
                    <Col sm='12' className='mt-1'>
                        <p>
                            We feature games from many popular providers such as:<br/>
                            <ul>
                                <li>Microgaming</li>
                                <li>Evolution Gaming</li>
                                <li>NYX Interactive</li>
                                <li>Yggdrasil Gaming</li>
                            </ul>
                            With that in mind, we hope you enjoy kasino9, and whatever you like to play, be it casino or sports betting, we hope you enjoy your visit.<br/>
                            If you have other query, please contact our support via email - support@kasino9.com. Your email will be answered within a maximum of one business day. You can as well contact us directly via Chat from 12am to 10pm every day of the week (chat window available in the lower corners of our homepage).<br/>
                        </p>
                    </Col>
                    <Col sm='12' className='mt-1'>
                        <h1 className='d-flex justify-content-start'>Licensing and Security</h1>
                    </Col>
                    <Col sm='12' className='mt-1 mb-4'>
                        <p>
                            We realise that the security is a very important issue of our customers and therefore we are using secure 2048 bits SSL certificate to guarantee that all your details are protected to the highest level possible.<br/>
                            kasino9 is a Abudantia brand and is licensed for casino games and betting given by Antillephone N.V.<br/>
                        </p>
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

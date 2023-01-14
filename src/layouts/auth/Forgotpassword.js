import React from "react"
import { Button, Card, CardBody, CardHeader, Form, Row, Col, FormGroup, Input, CardFooter } from "reactstrap"
import { connect } from "react-redux"
import * as LoginAction from "../../redux/actions/auth/loginActions"
import Animate from 'animate.css-react'
import {ChevronLeft,X} from "react-feather"

class Forgot extends React.Component{
    
    state = {
        forgot_card : false,
        email : "",   
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.registerpage !== prevProps.registerpage){
            if (this.props.registerpage.forgot === true) {
                this.setState({forgot_card:true});
            }else{
                this.setState({forgot_card:false});

            }
        }
    }

    login = () =>{
        this.props.setloginpage({login : true, register : false,forgot : false});
    }
    
    cancel = () => {
        this.props.setloginpage({login : false, register : false,forgot : false});
    }

    forgot = () =>{
        this.props.setloginpage({login : false, register : false,forgot : true});
    }
    
    handleForgot = e => {
        e.preventDefault();
        this.props.forgotpassword_send( this.state )
    }

    render(){
        
        return (
            <div>
                {
                    this.state.forgot_card === true ? 
                        <Animate appear="fadeIn" durationAppear={500} leave="fadeOut" durationLeave={500} component="div" >
                            <Form 
                                action="/" 
                                onSubmit={this.handleForgot} 
                                className="position-fixed vw-100 text-center vh-100 top-0 left-0" 
                                style={{zIndex:'1000',display:"initial", top:"0px", left:"0px", backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1rN4CgAClQF43CvNlgAAAABJRU5ErkJggg==)', overflowY:"scroll"}}
                            >
                                <Card style={{position:'absolute',top:'35%',left:'50%',transform: 'translate(-50%, -50%)', background:'#113536', borderRadius:'7px', maxWidth:'500px'}}>
                                    <CardHeader className='d-flex p-2 mt-1'>
                                        <ChevronLeft size="30" className="font-weight-bold" onClick={()=>this.login()} style={{cursor : "pointer"}}  />
                                        <h2>FORGOT PASSWORD? </h2>
                                        <X  size="30" className="font-weight-bold" style={{cursor : "pointer"}} onClick={()=>this.cancel()}   />
                                    </CardHeader>
                                    <CardBody className="login-body pb-0">
                                        <Row>
                                            <Col md='12' style={{color : "white"}}>
                                                Enter your registered e-mail address below and the instructions for retrieving the password will be sent to your e-mail.
                                            </Col>
                                            <Col sm="12" className='pl-2 pb-2 pr-2 pt-0 mt-2'>
                                                <FormGroup className='m-0'>
                                                    <Input 
                                                        type="text" 
                                                        name="Email" 
                                                        id="EmailVertical"
                                                        placeholder="Your Email Address"
                                                        value={this.state.email}
                                                        onChange={ e=>this.setState({email: e.target.value})}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className='pb-4 d-block'>
                                        <Button color="success" className=' register-submit' type="submit">Submit</Button>                                       
                                    </CardFooter>
                                </Card>
                            </Form>
                        </Animate>
                    :
                    <div/>
                }
            </div>
        )
    }
}

const getregisterpage = (state) =>{
    return {
        registerpage : state.auth.login.setloginpage
    }
}

export default connect(getregisterpage, LoginAction)(Forgot)
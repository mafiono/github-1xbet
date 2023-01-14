import React from "react"
import { Button, Card, CardBody, CardHeader, Form, Row, Col, FormGroup, Input, CardFooter,CardTitle } from "reactstrap"
import { connect } from "react-redux"
import * as LoginAction from "../../redux/actions/auth/loginActions"
import Animate from 'animate.css-react'
import {X} from "react-feather"

class Login extends React.Component{
    
    state = {
        login_card : false,
        email : "",
        password : "",
        remember : false
    }

    componentWillMount(){
        if(localStorage.getItem('remember')){
            var users = localStorage.getItem("remember");
            users = JSON.parse(users);
            this.setState({ email: users.email ,password :users.password })    
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.registerpage !== prevProps.registerpage){
            if (this.props.registerpage.login === true) {
                this.setState({login_card:true});
            }else{
                this.setState({login_card:false});
        
            }
        }
    }

    toggle_login = () =>{
        this.props.setloginpage({login : true, register : false,forgot : false});
    }
    
    cancle = () => {
        this.props.setloginpage({login : false, register : false,forgot : false});
    }

    forgot = () =>{
        this.props.setloginpage({login : false, register : false,forgot : true});
    }

    joinus = () =>{
        this.props.setloginpage({login : false, register : true,forgot : false});
    }
    
    handleLogin = e => {
        e.preventDefault();
        if(this.state.remember){
            var remember = {
                password : this.state.password,
                email : this.state.email
            }
            localStorage.setItem("remember",JSON.stringify(remember))
        }
        this.props.loginWithJWT(
            this.state
        )
    }
    
    handleRemember = e => {
        this.setState({
            remember: e.target.checked
        })
    }

    render(){
        
        return (
            <div>
                <Button.Ripple className=' btn-login' color="warning" style={{fontWeight:'bold'}} onClick={()=>this.toggle_login()} >LOGIN</Button.Ripple>
                {
                    this.state.login_card === true ? 
                        <Animate appear="fadeIn" durationAppear={500} leave="fadeOut" durationLeave={500} component="div" >
                            <Form 
                                action="/" 
                                onSubmit={this.handleLogin} 
                                className="position-fixed vw-100 text-center vh-100 top-0 left-0" 
                                style={{zIndex:'1000',display:"initial", top:"0px", left:"0px", backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU1rN4CgAClQF43CvNlgAAAABJRU5ErkJggg==)', overflowY:"scroll"}}
                            >
                                <Card style={{position:'absolute',top:'35%',left:'50%',transform: 'translate(-50%, -50%)', background:'#113536', borderRadius:'7px', maxWidth:'500px'}}>
                                    <CardHeader className='d-flex justify-content-center align-items-center p-2 mt-1'>
                                    <CardTitle className="d-block w-100 mt-1">LOGIN                                   
    <X  size="30" className="font-weight-bold float-right" style={{cursor : "pointer"}} onClick={()=>this.cancle()}   />
                                    </CardTitle>
                                        
                                    </CardHeader>
                                    <CardBody className="login-body pb-0 mt-2">
                                        <Row>
                                            <Col sm="12" className='pl-2 pb-2 pr-2 pt-0'>
                                                <FormGroup className='m-0'>
                                                    <Input 
                                                        type="text" 
                                                        name="Email" 
                                                        id="EmailVertical"
                                                        placeholder="Email / Username"
                                                        value={this.state.email}
                                                        onChange={ e=>this.setState({email: e.target.value})}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="12" className='pl-2 pb-2 pr-2 pt-0'>
                                                <FormGroup className='m-0'>
                                                    <Input 
                                                        type="password" 
                                                        name="password" 
                                                        id="passwordVertical" 
                                                        placeholder="Password"
                                                        value = {this.state.password}
                                                        onChange={e=>this.setState({password:e.target.value})}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className='pb-4 d-block'>
                                        <Button color="success" className=' register-submit' type="submit">SIGNIN</Button>
                                        <Row className=" mt-2">
                                            <Col md="6" sm="12" className="">
                                                <span color="success" className=' float-left' style={{textDecoration : "underline",cursor:"pointer"}}  onClick={()=>this.forgot()}>Forgot Password?</span>
                                            </Col>
                                            <Col md="6" sm="12" className="">
                                                <span color="danger" className=' float-right'style={{textDecoration : "underline",cursor:"pointer"}}    onClick={()=>this.joinus()}>Join Us</span>
                                            </Col>
                                        </Row>

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

export default connect(getregisterpage, LoginAction)(Login)
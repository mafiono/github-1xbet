import React from 'react'
import { Card, CardBody,CardImg,CardImgOverlay ,Input,Col,Row,Form,FormGroup,CardHeader,CardTitle,CardFooter,Button} from "reactstrap"
import { history } from "../../history";
import { connect } from "react-redux"
import {forgotpassword_receive,forgotpassword_set} from "../../redux/actions/auth/loginActions"
import {Root} from "../../authServices/rootconfig"
import {toast} from "react-toastify"

class ForgotPasswordVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user  :null,
            email : "",
            Repassword  :"",
            password : ""
        }
    }

    componentDidMount(){
        var data = history.location.pathname.split(':')[1];
        this.props.forgotpassword_receive(data)
    }

    componentDidUpdate(prevProps){
        if(this.props.userdata){
            if(prevProps.userdata.forgotpasswordemail !== this.props.userdata.forgotpasswordemail){
                this.setState({email : this.props.userdata.forgotpasswordemail})
            }
        }
    }

    handleForgotPassword = (e) =>{
        e.preventDefault();
        if(this.state.password !== this.state.Repassword){
            toast.warn("please enter correct password")
            return;
        }else{
            this.props.forgotpassword_set(this.state)
        }
    }

    render (){
        return (
            this.state.email? (
                <div className='d-flex justify-content-center vw vh p-2'>
                <Form 
                    action="/" 
                    onSubmit={this.handleForgotPassword} 
                    className="mt-5" 
                >
                    <Card className="text-white m-0 p-3" style={{maxWidth:'500px'}}>
                    <CardHeader className='d-flex justify-content-center align-items-center p-2 mt-1'>
                            <CardTitle className="d-block w-100 mt-1 text-center">RESET PASSWORD  </CardTitle>
                        </CardHeader>
                            <CardBody className='p-0' >
                                <Row>
                                    <Col sm="12" className='pl-2 pb-2 pr-2 pt-0'>
                                        <FormGroup className='m-0'>
                                            <Input 
                                                type="text" 
                                                name="Email" 
                                                id="EmailVertical"
                                                placeholder="Email / Username"
                                                disabled
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
                                                required
                                                    maxLength={15}
                                                    minLength={6}
                                                id="passwordVertical" 
                                                placeholder="Password"
                                                value = {this.state.password}
                                                onChange={e=>this.setState({password:e.target.value})}
                                                
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="12" className='pl-2 pb-2 pr-2 pt-0'>
                                        <FormGroup className='m-0'>
                                            <Input
                                                type="password" 
                                                
                                                    maxLength={15}
                                                    minLength={6}
                                                name="password" 
                                                id="passwordVertical1" 
                                                placeholder="REPassword"
                                                value = {this.state.Repassword}
                                                onChange={e=>this.setState({Repassword:e.target.value})}
                                                required
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter className='pb-4 d-block'>
                                <Button color="success" className=' register-submit' type="submit">RESET</Button>
                            </CardFooter>
                    </Card>
                </Form>
            </div>
              ) :(
                <div/>
            )
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        userdata : state.auth.login,
    }
}
export default connect(mapStateToProps,{forgotpassword_receive,forgotpassword_set})(ForgotPasswordVerify)
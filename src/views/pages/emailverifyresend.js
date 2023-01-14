import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody,CardImg,CardImgOverlay , FormGroup, Input, CardFooter,CardTitle,Form,CardHeader,Row,Col,Button} from "reactstrap"
import {resend_email} from "../../redux/actions/auth/loginActions"

export class emailverifyresend extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email : "example@gmail.com"
        }
    }

    componentDidMount(){
        console.log(this.props.location.state);
        if(this.props.location.state){
            if(this.props.location.state.data){
                this.setState({email : this.props.location.state.data})
            }
        }
    }

    handleResend = (e) =>{
        e.preventDefault();
        this.props.resend_email(this.state.email)
    }
    

    render() {
        return (
            <div className='d-flex justify-content-center vw vh p-2'>
                <Form className="mt-5" action="/"  onSubmit={this.handleResend}   >
                    <Card className="text-white m-0" style={{maxWidth:'500px'}}>
                        <CardHeader className='d-flex justify-content-center align-items-center p-2 mt-1'>
                            <CardTitle className="d-block w-100 mt-1 text-center">SEND EMAIl  </CardTitle>
                        </CardHeader>
                        <CardBody className="pb-0">
                            <Col md="12" style={{color : "white"}}>
                                Please check your email
                            </Col>
                            <Row>
                                <Col sm="12" className='pl-2 pb-2 pr-2 pt-0 mt-2'>
                                    <FormGroup className='m-0'>
                                        <Input 
                                            type="text" 
                                            name="Email" 
                                            id="EmailVertical"
                                            disabled
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={ e=>this.setState({email: e.target.value})}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className='pb-4 d-flex m-auto'>
                            <Button color="success" className=' register-submit' type="submit">RESEND</Button>
                        </CardFooter>
                    </Card>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    resend_email
}

export default connect(mapStateToProps, mapDispatchToProps)(emailverifyresend)

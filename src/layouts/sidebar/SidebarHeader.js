import React, { Component } from "react"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import {Root} from "../../authServices/rootconfig"
import avatar from "../../assets/img/avatar.png"
import { Row } from "reactstrap";

class SidebarHeader extends Component {

	state = {
		users : {},
		avatar : null,
		mbalance : '0 INR',
		bbalance : '0 INR'
    }

	componentDidUpdate(prevProps, prevState){
		if(this.props.user){
			if(this.props.user.profile_user !== prevState.users){
				this.setState({users  : this.props.user.profile_user});
			}			
		}
		if(prevProps.bal !== this.props.bal){
             this.setState({bbalance : this.props.bal ? parseInt(this.props.bal.bonusbalance).toString()+' INR':'0 INR',mbalance :this.props.bal ? parseInt(this.props.bal.balance).toString()+' INR':'0 INR' });
        }
	}

	render() {
		return (
			<div className="navbar-header" style={{height:'9rem', width:'100%'}}>
				<ul className="nav navbar-nav flex-row">
				<li style={{width:'100%'}} className="nav-item nav-toggle d-block">
					<div className="nav-link">
					<Link to="/myprofile/profile-info" className="d-flex">
						{this.state.users?(
						<img className="m-1" src={Root.imageurl +this.state.users.avatar} style={{width:"40px", borderRadius:'50%',height:"40px"}} alt=''/>
						):(
						<img className="m-1" src={avatar} style={{width:"40px", borderRadius:'50%',height:"40px"}} alt=''/>  
						)}
						<h5 className="d-table text-center m-0 mt-1" style={{maxWidth:'135px'}}>
						<small>{this.state.users ? this.state.users.email : ""}</small> 
						<small className="d-table-row mt-1">{this.state.users ? this.state.users.username : ""}</small></h5>
					</Link>
					<Row style={{margin:'0.5rem' ,marginBottom:'0'}}>
						<div style={{background:'#1b4048', cursor:'pointer', width:'48%', fontSize:'11px', textAlign:'center', padding:'1px', color:'#1fae73', marginRight:'2%'}}>Main Balance<br/>{this.state.mbalance}</div>
						<div style={{background:'#1b4048', cursor:'pointer', width:'48%', fontSize:'11px', textAlign:'center', padding:'1px', color:'#1fae73', marginLeft:'2%'}}>Bonus Balance<br/>{this.state.bbalance}</div>
					</Row>
					</div>
				</li>
				</ul>
			</div>
		)
	}
}

const getusers = (state) =>{
    return {
        user : state.auth.login,
        bal : state.balance.value,
    }
  }
export default connect(getusers)(SidebarHeader)

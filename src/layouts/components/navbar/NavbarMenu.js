import React, { Component } from "react";
import { MDBNavbar } from "mdbreact";
import {Dropdown,Button,DropdownMenu,DropdownItem,DropdownToggle,UncontrolledTooltip} from "reactstrap";
import {logoutWithJWT,menuload} from "../../../redux/actions/auth/loginActions";
import {getSession,is_session} from "../../../redux/actions/auth/index";
import { connect } from "react-redux";
import avatar from "../../../assets/img/avatar.png";
import 'mdbreact/dist/css/mdb.css';
import {Root} from "../../../authServices/rootconfig";
import {history} from "../../../history";
import {get_userinfor} from "../../../redux/actions/auth/ProfileActions";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaLanguage, FaChevronDown, FaCog, FaRegEdit, FaSignInAlt, FaDesktop, FaUnlock, FaMobileAlt, FaTelegramPlane, FaDollarSign, FaPhone, FaChartBar, FaTrophy } from 'react-icons/fa';
import { Link } from "react-router-dom";

const handleNavigation = (e, path) => {
    e.preventDefault()
    history.push(path)
  }

class NavbarPage extends Component {

    state={
        langDropdown: false,
        users : {},
        isAuthenticated : false,
        dropclassname : "header-dropdown-user nav-item dropdown",
        dropdownclass : "header-user-dropdown-menu dropdown-menu",
        bal : {balance : 0},
        activeIndex : history.location.pathname
    }

    handleResize = () => {
    }

    async componentWillMount(){
        if(is_session()){
            var user = await getSession();
            this.setState({users : user,isAuthenticated : true});
        }
    }

    logout = () => {
        this.props.logoutWithJWT();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize, false)
    }

    handleLangDropdown = () =>{
        this.setState({ langDropdown: !this.state.langDropdown })
    }

    async componentWillUpdate(prevProps, prevState){

        if(!this.props.user.values)
        {
            if(prevState.isAuthenticated === true){
                this.setState({isAuthenticated : false});
            }
        }else{
            if(prevState.isAuthenticated === false){
                this.setState({isAuthenticated : true});
            }
        }
        if(prevProps.user.values !== this.props.user.values){
             this.setState({users : this.props.user.profile_user});
        }

        if(prevState.bal !== this.props.bal){
             this.setState({bal : this.props.bal});
        }
    }

render(){
    const guestLinks = (
        <div style={{display:"flex"}}>
            <div className="header-user-info" id="usersinfor">
                <Button className='header-deposit-button' color="warning" onClick={()=>history.push("/mywallet/deposit")} >Deposit</Button>
                <div className="header-user-balance">
                    <h5>{this.state.bal ?isNaN(Number(this.state.bal.balance + this.state.bal.bonusbalance).toFixed(2) ) ? 0 :Number(this.state.bal.balance + this.state.bal.bonusbalance).toFixed(2)  + "INR":""}</h5>
                </div>
            </div>

            <Dropdown
                tag="li"
                className="dropdown-language nav-item "
                style={{listStyle : "none"}}
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                onMouseEnter={this.handleLangDropdown}
                onMouseLeave={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle
                  tag="a"
                     className="nav-link"
                     
                    onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                    style={{overflow: 'hidden',
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"}}
                >
                    {
                        this.props.user.profile_user && this.props.user.profile_user.avatar ? (
                            <img src={Root.imageurl +this.props.user.profile_user.avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/> 
                        ):(
                            <img src={avatar} style={{width:"40px", borderRadius:'50%'}} alt=''/>  
                        ) 
                    }
                </DropdownToggle>
                <DropdownMenu right className="user-dropdown-menu p-0">
                <DropdownItem
                style={{overflow:"hidden",whiteSpace:'nowrap',textOverflow:'ellipsis'}}
                    tag="a"
                    href="#" 
                    onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                >
                    {
                        this.props.user.profile_user  ? (
                            <span  className="align-middle">{this.props.user.profile_user.firstname + " " + this.props.user.profile_user.lastname}</span>
                        ):(
                            <span>&nbsp;</span>
                        )
                    }
                </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/mywallet/deposit")}
                    >
                        <span className="align-middle">My Wallet</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/myprofile/profile-info")}
                    >
                        <span className="align-middle">My Profile</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Mybets/casinos")}
                    >
                        <span className="align-middle">My Bets</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Bonuses/casinos")}
                    >
                        <span className="align-middle">Bonuses</span>
                    </DropdownItem>
                    <DropdownItem
                        tag="a"
                        href="#"
                        onClick={e => handleNavigation(e, "/Messages/messages")}
                    >
                        <span className="align-middle">Messages</span>
                    </DropdownItem>
                    <DropdownItem className="border-bottom-0"
                        tag="div"
                        onClick={()=>this.logout()}
                    >
                        <span className="align-middle">Log Out</span>
                    </DropdownItem>
                </DropdownMenu>
              </Dropdown>
        </div>
      )
    return (
      <div>
        <MDBNavbar className="header-nav-bar">
            <div className='header-top-bar'>
                <div className='start'>
                    <div title="Desktop apps" className='header-top-bar-item big'>
                        <FaDesktop size={22}/>
                        <span className="name">Desktop<b>apps</b></span>
                    </div>
                    <div className='header-top-bar-item' title='How to bypass the website blocks'>
                        <FaUnlock size={22}/>
                        <span className="name">How to bypass<b>the website blocks</b></span>
                    </div>
                    <div className='header-top-bar-item' title='Smartphone app'>
                        <FaMobileAlt size={22}/>
                        <span className="name"><b>Smartphone</b>app</span>
                    </div>
                    <div className='header-top-bar-item big' title='Bets via Telegram'>
                        <FaTelegramPlane size={22}/>
                        <span className="name">Bets<b>via Telegram</b></span>
                    </div>
                    <div className='header-top-bar-item small' title='Payments'>
                        <FaDollarSign size={22}/>
                        <span>Payments</span>
                    </div>
                    <div className='header-top-bar-item'>
                        <FaPhone size={22}/>
                    </div>
                    <div className='header-top-bar-item' title='Statistics'>
                        <FaChartBar size={22}/>
                    </div>
                    <div className='header-top-bar-item' title='Results'>
                        <FaTrophy size={22}/>
                    </div>
                    <div className='header-top-bar-item bonus'>
                        <b>1000INR<br/><i>bonus</i></b>
                    </div>
                </div>
                <div className='end'>
                    <div className='header-top-bar-item login'>
                        <FaSignInAlt size={15}/>
                        <span className="name">Login</span>
                    </div>
                    <div className='header-top-bar-item registration'>
                        <FaRegEdit size={15}/>
                        <span className="name">Registration</span>
                    </div>
                    <div className='header-top-bar-item big'>
                        <FaCog size={15}/>
                        <FaChevronDown size={12} style={{marginLeft:'5px'}}/>
                    </div>
                    <div className='header-top-bar-item dropdown'>
                        <span className="name">05:10</span>
                        <FaChevronDown size={12}/>
                    </div>
                    <div className='header-top-bar-item big'>
                        <FaLanguage size={22}/>
                        <FaChevronDown size={12} style={{marginLeft:'5px'}}/>
                    </div>
                </div>
            </div>
            <div className='header-bottom-bar'>
                <Link to="/" className='d-flex justify-content-center'>
                {       this.props.firstpagesettinglogoimg ?(
                        <LazyLoadImage
                            alt='logo'
                            style={{height:'50px'}}
                            effect="blur"
                            src ={Root.imageurl + this.props.firstpagesettinglogoimg.content}
                        />
                    ):null
                }
                {
                    this.props.firstpagesettinglogoimg ? 
                        (()=> {
                            let link = document.querySelector('link[rel="shortcut icon"]') ||
                            document.querySelector('link[rel="icon"]');
    
                            if (!link) {
                                link = document.createElement('link');
                                link.id = 'favicon';
                                link.rel = 'shortcut icon';
                                document.head.appendChild(link);
                            }
    
                            link.href = Root.imageurl + this.props.firstpagesettinglogoimg.content;
                        })():null
                    }
                </Link>
                <div className="header-nav-bar-menu">
                    <div className="header-nav-bar-item-group">
                        {
                            !this.props.navigationConfig ? "" :
                            this.props.navigationConfig.map((item,i) => (
                                <Link to={item.navLink}  key={i}>
                                    <div className={"header-nav-bar-item"+(this.state.activeIndex===item.navLink?' header-nav-bar-item-active':'')} onClick={()=>this.setState({activeIndex : item.navLink})}>
                                        <span>{item.title}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* <MDBNavbarBrand className="header-nav-bar-brand">
                <Link to="/">
                {       this.props.firstpagesettinglogoimg ?(
                        <LazyLoadImage
                            alt='logo'
                            style={{width:'170px'}}
                            effect="blur"
                            src ={Root.imageurl + this.props.firstpagesettinglogoimg.content}
                        />
                    ):null
                }
                {
                    this.props.firstpagesettinglogoimg ? 
                        (()=> {
                            let link = document.querySelector('link[rel="shortcut icon"]') ||
                            document.querySelector('link[rel="icon"]');
    
                            if (!link) {
                                link = document.createElement('link');
                                link.id = 'favicon';
                                link.rel = 'shortcut icon';
                                document.head.appendChild(link);
                            }
    
                            link.href = Root.imageurl + this.props.firstpagesettinglogoimg.content;
                        })():null
                    }
                </Link>
            </MDBNavbarBrand> */}
            {/* <div className="header-nav-bar-user imtem-center">
            <Clock />
                <>
                {
                    (()=> {
                        if(this.state.isAuthenticated){
                            return guestLinks;
                        }else{  
                            return <UserLogin /> 
                        }
                    })()
                }
                {
                    (()=> {
                        if(!this.state.isAuthenticated){
                            return <UserRegister />
                        }
                    })()
                }
                 {
                    (()=> {
                        if(!this.state.isAuthenticated){
                            return <UserForgot />
                        }
                    })()
                }
                </>
            </div> */}
        </MDBNavbar>
      </div>
    );
  }
}
const getusers = (state) =>{
    return {
        navigationConfig : state.auth.login.menuload,
        user : state.auth.login,
        bal : state.balance.value,
        firstpagesettinglogoimg : state.auth.login.firstpagesettinglogoimg,
    }
  }
export default connect(getusers,{logoutWithJWT,menuload,get_userinfor})(NavbarPage)

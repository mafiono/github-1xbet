import React from "react"
import {  UncontrolledDropdown,Dropdown,DropdownMenu,DropdownItem,DropdownToggle,} from "reactstrap"
import * as Icon from "react-feather"
import ReactCountryFlag from "react-country-flag"
import { IntlContext } from "../../../utility/context/Internationalization"
import { connect } from "react-redux"
import UserDropdown from './Userdropdown'
import {  logoutWithJWT} from "../../../redux/actions/auth/loginActions"
import { is_session,getSession} from "../../../redux/actions/auth/index"
import Clock from "./Clock"
class NavbarUser extends React.PureComponent {
  state = {
    navbarSearch: false,
    langDropdown: false,
    log_modal : false,
    isAuthenticated : false,
    email : ""
  }


  handleLangDropdown = () =>{
    this.setState({ langDropdown: !this.state.langDropdown })
  }

  UNSAFE_componentWillMount(){
    if(is_session()){
      var user = getSession();
      this.setState({email : user.email,isAuthenticated : true});
    }
  }

  render() {
    
    const guestLinks = (
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                { this.state.email}
              </span>
            </div>
            <div className="icon-section">
              <div className="avatar avatar-stats p-50 m-0 bg-rgba-dark">
                <div className="avatar-content"><Icon.Users size={30} color={'white'}  />
                </div>
              </div>
            </div>
          </DropdownToggle>
          <UserDropdown  />
        </UncontrolledDropdown>
    )
    
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <Clock />
        {
          (()=> {
            if(this.state.isAuthenticated){
              return guestLinks;
            }
          })()
        }

        <IntlContext.Consumer>
          {context => {
            let langArr = {
              "en" : "English",
              "de" : "German",
              "fr" : "French",
              "pt" : "Portuguese"
            }
            return (
              <Dropdown
                tag="li"
                className="dropdown-language nav-item"
                isOpen={this.state.langDropdown}
                toggle={this.handleLangDropdown}
                data-tour="language"
              >
                <DropdownToggle
                  tag="a"
                  className="nav-link"
                >
                  <ReactCountryFlag className="country-flag" countryCode={ context.state.locale === "en" ? "us" : context.state.locale } svg/>
                  <span className="d-sm-inline-block d-none text-capitalize align-middle ml-50">
                    {langArr[context.state.locale]}
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("en")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="us" svg />
                    <span className="ml-1">English</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("fr")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="fr" svg />
                    <span className="ml-1">French</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("de")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="de" svg />
                    <span className="ml-1">German</span>
                  </DropdownItem>
                  <DropdownItem
                    tag="a"
                    onClick={e => context.switchLanguage("pt")}
                  >
                    <ReactCountryFlag className="country-flag" countryCode="pt" svg />
                    <span className="ml-1">Portuguese</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )
          }}
        </IntlContext.Consumer>
      </ul>
    )
  }
}

const get_auth = state => {
  return {
    user : state.auth.login
  }
}
export default connect(get_auth,{logoutWithJWT}) (NavbarUser)
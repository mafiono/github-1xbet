import React from "react"
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap"
import { connect } from "react-redux"
import { Root } from "../../../authServices/rootconfig"
import { Phone } from "react-feather";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      messageList: [
        {type: 'text', author: 'them', data: { text: "How are you?"} },
        
      ],
      newMessagesCount: 1,
      isOpen: false
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [...this.state.messageList, {
        type: 'file', author: 'me',
        data: {
          url: objectURL,
          fileName: fileList[0].name
        }
      }]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
    }
  }
    
  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render() {
    return (
      <footer>
        <div className='footerColumnMenuCon'>
          <Row className='footerColumnMenu'>
            <Col>
              <div className="name">Information</div>
              <ul className='footerColumnMenuUL'>
                {
                  !this.props.quickdata ? "" :this.props.quickdata.map((item,i) => (
                  <li key={i}>
                    <Link to={item.navLink}>
                      {item.title}
                    </Link>
                  </li>                            
                  ))
                }
              </ul>
            </Col>
            <Col>
              <div className="name">Games</div>
              <ul className='footerColumnMenuUL'>
                {
                  !this.props.navigationConfig ? "" :this.props.navigationConfig.map((item,i) => (
                  <li key={i}><Link to={item.navLink}>{item.title}</Link></li>
                  ))
                }
              </ul>
            </Col>
            <Col>
              <div className="name">App</div>
              <ul className='footerColumnMenuUL'>
                <li><Link to={'/iOS'}>iOS</Link></li>
                <li><Link to={'/Android'}>Android</Link></li>
                <li><Link to={'/Windows'}>Windows</Link></li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="foot-description-bg" style={{display: 'block'}}>
          <div className="foot-description ">
              <div className="foot-description-partner">
                <div className="foot-description-partner__sport">
                    <p className="foot-description-partner__title">Game Providers:</p>
                    <div className="foot-description-partner__wrap">
                      {
                        !this.props.FirstpageProviderImg ? "" : 
                        this.props.FirstpageProviderImg.map((item,i)=>(
                          <a key={i} className="foot-description-partner__item" style={{backgroundImage:`url(${Root.imageurl+item.image})`}}></a>
                        ))
                      }
                    </div>
                </div>
                <div className="foot-description-partner__esport">
                    <p className="foot-description-partner__title">Payment Methods:</p>
                    <div className="foot-description-partner__wrap">
                      {
                        !this.props.FirstpagePaymentMethodImg ? "" : this.props.FirstpagePaymentMethodImg.map((item,i) => (
                          <a key={i} className="foot-description-partner__item" style={{backgroundImage:`url(${Root.imageurl + item.image})`}}></a>
                        ))
                      }
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div className="f-policy">
          {
            !this.props.footertext ? '' : this.props.footertext.content 
          }
        </div>
        <div className="footer-position">
          <div className="foot_column">
              <div className="footer-support-phone">
                <div className="footer-support-phone__container">
                    <Phone className="footer-support-phone__ico ico ico__svg"/>
                    <div className="footer-support-phone__content">
                      <span className="footer-support-phone__label">Support</span>
                      <a href="tel:91000000000" className="footer-support-phone__link">91000000000</a>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </footer>
    )
  }
}

const mapstops = (state)=>{
    return {
      navigationConfig : state.auth.login.menuload,
      firstpagesettinglogoimg : state.auth.login.firstpagesettinglogoimg,
      FirstpagePaymentMethodImg : state.auth.login.FirstpagePaymentMethodImg,
      title : state.auth.login.title,
      footertext : state.auth.login.footertext,
      socialdata : state.auth.login.socialdata,
      quickdata : state.auth.login.quickdata,
      favicon : state.auth.login.favicon,
      newstext : state.auth.login.newstext,
      FirstpageProviderImg : state.auth.login.FirstpageProviderImg
    }
}

export default connect(mapstops,{})(Footer)
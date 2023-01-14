import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap"
import { Link } from "react-router-dom";
import classnames from "classnames"
import ReactFlagsSelect from 'react-flags-select'
import ReactCountryFlagsCurrencySelect from 'react-country-flag-currency-picker'
import PhoneInput from 'react-phone-input-2'
import Swiper from "react-id-swiper"
const params = {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 4000,
	  disableOnInteraction: false
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
}
export class FirstPageHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            active: "1",
            country:'',
            currency:'',
            promoCode:'',
            confirmationCode:'',
            phone:'',
            slider:[
                {
                    img:'1.jpg',
                    title:'100% bonus On the 1st deposit up to 8000 INR',
                    desc:'',
                    button:"Register",
                },
                {
                    img:'2.jpg',
                    title:'No risk bet',
                    desc:'Did your bet lose? Then get a refund!',
                    button:"Place a bet",
                },
                {
                    img:'3.jpg',
                    title:'WINNER',
                    desc:'Top up your account and take part in a huge prize draw!',
                    button:"Make a deposit",
                },
                {
                    img:'4.jpg',
                    title:'THE ESPORTS ERA',
                    desc:'Bet on esports and get a refund on your losing bets!',
                    button:"Place a bet",
                },
                {
                    img:'5.jpg',
                    title:'1XBET STRIKES DEAL WITH FC BARCELONA AS GLOBAL PARTNER',
                    desc:'LET THE GAME BEGIN!',
                    button:"Find out more",
                },
                {
                    img:'6.jpg',
                    title:'1xBet — NAVI Title Partner',
                    desc:'Dream big with 1xBet!',
                    button:"Find out more",
                },
                {
                    img:'7.jpg',
                    title:'ACCUMULATOR BATTLE',
                    desc:'THE BIGGEST BETTOR OF THE MONTH WINS A CAR',
                    button:"Place a bet",
                },
                {
                    img:'8.jpg',
                    title:'TV Bet Jackpot',
                    desc:"DON'T MISS YOUR CHANCE TO HIT THE JACKPOT!",
                    button:"Find out more",
                },
                {
                    img:'9.jpg',
                    title:'CASH ON DELIVERY',
                    desc:'HAVE NO BANK ACCOUNT TO MAKE A DEPOSIT? CALL 1xMAN FOR HELP!',
                    button:"MAKE A CASH DEPOSIT",
                },
                {
                    img:'10.jpg',
                    title:'1xCases',
                    desc:'Open cases and get real money!',
                    button:"Play",
                },
                {
                    img:'11.jpg',
                    title:'Avengers',
                    desc:'Reveal Avengers symbols and win!',
                    button:"Play",
                },
                {
                    img:'12.jpg',
                    title:'FIRST DEPOSIT MEGABONUS',
                    desc:'WELCOME PACKAGE UP TO €1,500 + 150 FREE SPINS',
                    button:"Register",
                }
            ]
        }
	}
	
	toggle = tab => {
		if (this.state.active !== tab) {
		  this.setState({ active: tab })
		}
	}
    
    render() {
        return (
            <Row className='first-page-header'>
				<Col className='p-0 m-0'>
					<Row className='m-0'>
						<Col className='p-0' style={{margin:'0 10px 0 0'}}>
							<div className="nav-box">
								<Link to="toto/" className="nav-box nav-box_default">
									<div className="nav-box__bg" style={{backgroundImage: `url(${require('../../assets/img/pages/sports.jpg')})`}}></div>
									<header className="nav-box__header">
										<h3 className="nav-box__title">Totalizators</h3>
									</header>
									<section className="nav-box__content">
										<div className="nav-box__text">Total Jackpot</div>
									</section>
									<footer className="nav-box__footer">
										<div className="nav-box__button">Place a bet</div>
									</footer>
								</Link>
							</div>
							<div className="nav-box" style={{marginTop:'10px'}}>
								<Link to="toto/" className="nav-box nav-box_default">
									<div className="nav-box__bg" style={{backgroundImage: `url(${require('../../assets/img/pages/porker.jpg')})`}}></div>
									<header className="nav-box__header">
										<h3 className="nav-box__title">Games</h3>
									</header>
									<section className="nav-box__content">
										<div className="nav-box__text">Over <br/><span>100</span><br/> games</div>
									</section>
									<footer className="nav-box__footer">
										<div className="nav-box__button">Play</div>
									</footer>
								</Link>
							</div>
						</Col>
						<Col className='main_registration_section p-0'  style={{margin:'0 10px 0 0'}}>
							<div className="registration-betting__link">
								<span>100%</span> bonus on the 1st deposit                                    
							</div>
							<div className="js_reg_form_scroll">
								<div className="c-registration">
									<h2 className="c-registration__title">Registration</h2>
									<div className='c-registration__item'>
										<Nav tabs className="nav-fill">
											<NavItem>
												<NavLink 
													className={classnames({ active: this.state.active === "1" })} 
													onClick={() => {this.toggle("1")}}>
													<svg className="c-registration__tab-ico" viewBox="0 0 32 32">
														<path d="M25.067 11c-0.067-0.2-0.267-0.333-0.467-0.333h-6.333l6.267-9.867c0.133-0.133 0.133-0.4 0-0.533-0.067-0.133-0.267-0.267-0.467-0.267h-8.533c-0.2 0-0.4 0.133-0.467 0.267l-8 16c-0.067 0.2-0.067 0.4 0 0.533s0.267 0.267 0.467 0.267h5.467l-6 14.2c-0.133 0.267 0 0.533 0.2 0.667 0.133 0.067 0.267 0.067 0.333 0.067 0.133 0 0.333-0.067 0.4-0.2l17.067-20.267c0.133-0.133 0.2-0.4 0.067-0.533z"/>
													</svg>
													One-click
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink 
													className={classnames({ active: this.state.active === "2" })} 
													onClick={() => {this.toggle("2")}}>
													<svg className="c-registration__tab-ico" viewBox="0 0 32 32">
														<path d="M23.067 0h-14.267c-1.133 0-2.133 1-2.133 2.133v27.667c0 1.2 1 2.2 2.133 2.2h14.267c1.2 0 2.133-1 2.133-2.133v-27.733c0.067-1.133-0.933-2.133-2.133-2.133zM13.667 1.533h4.533c0.133 0 0.267 0.133 0.267 0.267s-0.133 0.267-0.267 0.267h-4.533c-0.133 0-0.267-0.133-0.267-0.267s0.133-0.267 0.267-0.267zM15.933 30.933c-0.6 0-1.067-0.467-1.067-1.067s0.467-1.067 1.067-1.067c0.6 0 1.067 0.467 1.067 1.067 0.067 0.6-0.467 1.067-1.067 1.067zM23.733 28h-15.533v-24.6h15.6v24.6z"/>
													</svg>
													By phone
												</NavLink>
											</NavItem>
										</Nav>
										<TabContent activeTab={this.state.active}>
											<TabPane tabId="1">
												<Row>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<ReactFlagsSelect defaultCountry="IN" onSelect={(e)=>this.setState({country:e})}/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<ReactCountryFlagsCurrencySelect defaultCountry="IN" onSelect={(e)=>this.setState({currency:e})}/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<input 
															className='c-registration__field c-registration__input' 
															placeholder='Enter promo code' 
															value={this.state.promoCode} 
															onChange={(e)=>this.setState({promoCode:e.target.value})}
														/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<div className="button">Register</div>
													</Col>
												</Row>
												<Row>
													<Col sm='12'>
														<p className='c-registration__field'>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"> Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
													</Col>
													<Col sm='12'>
														<p className='c-registration__field'>By clicking this button you confirm that you have read and agree to the <a href="/information/rules/" target="_blank">Terms and Conditions</a> and <a href="/information/rules/" target="_blank">Privacy Policy</a> of the company and confirm that you are of legal age</p>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="2">
												<Row>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<PhoneInput
															country={'us'}
															value={this.state.phone}
															onChange={phone => this.setState({phone:phone})}
														/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<ReactCountryFlagsCurrencySelect defaultCountry="IN" onSelect={(e)=>this.setState({currency:e})}/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<input 
															className='c-registration__field c-registration__input' 
															placeholder='Enter promo code' 
															value={this.state.promoCode} 
															onChange={(e)=>this.setState({promoCode:e.target.value})}
														/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<input 
															className='c-registration__field c-registration__input' 
															placeholder='Confirmation code' 
															value={this.state.promoCode} 
															onChange={(e)=>this.setState({confirmationCode:e.target.value})}
														/>
													</Col>
													<Col sm='12' style={{marginBottom:'.625em'}}>
														<div className="button">Register</div>
													</Col>
												</Row>
												<Row>
													<Col sm='12'>
														<p className='c-registration__field'>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"> Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
													</Col>
													<Col sm='12'>
														<p className='c-registration__field'>By clicking this button you confirm that you have read and agree to the <a href="/information/rules/" target="_blank">Terms and Conditions</a> and <a href="/information/rules/" target="_blank">Privacy Policy</a> of the company and confirm that you are of legal age</p>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</div>
								</div>
							</div>
						</Col>
						<Col className='m-0 p-0'>
							<div className="nav-box">
								<Link to="/casino" className="nav-box nav-box_default">
									<div className="nav-box__bg" style={{backgroundImage: `url(${require('../../assets/img/pages/casino.jpg')})`}}></div>
									<header className="nav-box__header">
										<h3 className="nav-box__title">Casino</h3>
									</header>
									<section className="nav-box__content">
										<div className="nav-box__text">Over <br/><span>8000</span><br/> games</div>
									</section>
									<footer className="nav-box__footer">
										<div className="nav-box__button">Place a bet</div>
									</footer>
								</Link>
							</div>
							<div className="nav-box" style={{marginTop:'10px'}}>
								<Link to="/live-casino" className="nav-box nav-box_default">
									<div className="nav-box__bg" style={{backgroundImage: `url(${require('../../assets/img/pages/live-casino.jpg')})`}}></div>
									<header className="nav-box__header">
										<h3 className="nav-box__title">Live Casino</h3>
									</header>
									<section className="nav-box__content">
										<div className="nav-box__text">Over <br/><span>100</span><br/> tables</div>
									</section>
									<footer className="nav-box__footer">
										<div className="nav-box__button">Place a bet</div>
									</footer>
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
				<Col className='slider'>
					<Swiper {...params}>
						{
							this.state.slider?this.state.slider.map((item, key)=>(
								<div key={key}>
									<img src={require('../../assets/img/pages/'+item.img)} alt="swiper 1" className="img-fluid" />
									<a className="slider__link_onclick js-banner-link">
										<header className="slide__title">{item.title}</header>
										<div className="slide__subtitle">{item.desc}</div>
										<div className="slide__btn-group">
											<div className="link slide__button main-header__btn">{item.button}</div>
										</div>
									</a>
								</div>
							)):null
						}
					</Swiper>
				</Col>
			</Row>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPageHeader)

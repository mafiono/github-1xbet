import React, { Component } from 'react'
import { Archive, Circle, DollarSign, Facebook, FileText, HelpCircle, Play, Search, Twitter } from 'react-feather'
import { connect } from 'react-redux'
import Swiper from "react-id-swiper"
import icons from '../../assets/icons.svg'
const params = {
    slidesPerView: 3,
    breakpoints: {
        1024: {
            slidesPerView: 15,
            spaceBetween: 5
        },
        640: {
            slidesPerView: 6,
            spaceBetween: 5
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
}
export class FirstPageContent extends Component {
    SvgRender(e){
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
            >
                <use xlinkHref={`${icons}#sports_1`} />
            </svg>
        )
    }
    render() {
        return (
            <div className='first-page-content'>
                <div className='sports_main_new'>
                    <section className="c-section" style={{marginBottom:'10px'}}>
                        <div>
                            <div className='c-section__header'>
                                <div className='c-section-header'>
                                    <h2 className="c-section-header__title">
                                        <span>LIVE Bets</span>
                                    </h2>
                                    <div className="b-filters__options">
                                        <div className="sports-content__search-wrap">
                                            <Search size={13} className='sports-content__search-icon'/>
                                            <input placeholder="Search" type="text" className="sports-content__search"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='sports-slider__wrapper'>
                                    <div className='b-filters__slider'>
                                        <div className='b-filters__sports b-filters__sports_live'>
                                            <div className="b-filters__item b-filters__item_alone">
                                                <div title="Show streaming games" className="c-events__ico c-events__ico_video"></div>
                                            </div>
                                            <div className='b-filters__carousel'>
                                                <Swiper {...params}>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div><div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <Circle size={17}/>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                        </div>
                                                    </div>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='c-section__content'>
                                <div className="c-events blueBack">
                                    <div className="c-events__item c-events__item_head blueBack">   
                                        <svg className="icon"><use xlinkHref={`${icons}#sports_1`} /></svg>
                                        <div className="c-events__lang langDT17 ldt_231"></div>
                                        <div className="c-events__name">
                                            <a className="c-events__liga">
                                                England. Premier League
                                            </a>
                                        </div>
                                        <div className="c-bets">
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1X</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">12</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Total</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Handicap</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">IT1</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-events blueBack">
                                    <div className="c-events__item c-events__item_head blueBack">   
                                        <svg className="icon"><use xlinkHref={`${icons}#sports_1`} /></svg>
                                        <div className="c-events__lang langDT17 ldt_231"></div>
                                        <div className="c-events__name">
                                            <a className="c-events__liga">
                                                England. Premier League
                                            </a>
                                        </div>
                                        <div className="c-bets">
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1X</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">12</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Total</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Handicap</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">IT1</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <div className='c-section__header'>
                                <div className='c-section-header'>
                                    <h2 className="c-section-header__title">
                                        <span>LIVE Bets</span>
                                    </h2>
                                    <div className="b-filters__options">
                                        <div className="sports-content__search-wrap">
                                            <Search size={13} className='sports-content__search-icon'/>
                                            <input placeholder="Search" type="text" className="sports-content__search"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='sports-slider__wrapper'>
                                    <div className='b-filters__slider'>
                                        <div className='b-filters__sports b-filters__sports_live'>
                                            <div className="b-filters__item b-filters__item_alone">
                                                <div title="Show streaming games" className="c-events__ico c-events__ico_video"></div>
                                            </div>
                                            <div className='b-filters__carousel'>
                                                <Swiper {...params}>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div><div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                            <span>ball</span>
                                                        </div>
                                                    </div>
                                                    <div className="img-fluid">
                                                        <div className='d-flex justify-content-center align-content-center pt-1 pb-1'>
                                                        </div>
                                                    </div>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='c-section__content'>
                                <div className="c-events blueBack">
                                    <div className="c-events__item c-events__item_head blueBack">   
                                        <svg className="icon"><use xlinkHref={`${icons}#sports_1`} /></svg>
                                        <div className="c-events__lang langDT17 ldt_231"></div>
                                        <div className="c-events__name">
                                            <a className="c-events__liga">
                                                England. Premier League
                                            </a>
                                        </div>
                                        <div className="c-bets">
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1X</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">12</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Total</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Handicap</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">IT1</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="c-events blueBack">
                                    <div className="c-events__item c-events__item_head blueBack">   
                                        <svg className="icon"><use xlinkHref={`${icons}#sports_1`} /></svg>
                                        <div className="c-events__lang langDT17 ldt_231"></div>
                                        <div className="c-events__name">
                                            <a className="c-events__liga">
                                                England. Premier League
                                            </a>
                                        </div>
                                        <div className="c-bets">
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1X</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">12</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2X</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Total</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                            <div className="c-bets__bet c-bets__bet_sm">1</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">Handicap</div>
                                            <div className="c-bets__bet c-bets__bet_sm">2</div>
                                            <div className="c-bets__bet c-bets__bet_sm">O</div>
                                            <div className="c-bets__bet c-bets__bet_sm c-bets__bet_change">IT1</div>
                                            <div className="c-bets__bet c-bets__bet_sm">U</div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="c-events__item c-events__item_col">
                                        <div className="c-events__item">
                                            <div className="c-events__date">
                                                23 October
                                            </div>
                                        </div>
                                        <div className="c-events__item c-events__item_game">
                                            <div className="c-events__favorite"></div>
                                            <div className="c-events__time-info">
                                                <div className="c-events__time  min">
                                                    <span>23.10 12:00</span>  
                                                </div>
                                            </div>
                                            <button className="c-events__to-top c-events__to-top_line">
                                                <svg className="top-icon">
                                                    <use xlinkHref={`${icons}#Capa1`}></use>
                                                </svg>
                                            </button>
                                            <a className="c-events__name">
                                                <span className="c-events__teams">
                                                    <span className="c-events__team">Aston Villa </span> 
                                                    <span className="c-events__team">Leeds United </span>    
                                                </span>
                                            </a>
                                            <div className="c-events__dop">
                                                <div className="c-events__icons">
                                                    <div lass="c-events__ico c-events__ico_stat"></div>
                                                    <div lass="c-events__ico c-events__ico_standings"></div>
                                                    <svg className="c-events__ico c-events__ico_coef-graph">
                                                        <title>Odds movement chart</title>
                                                        <use xlinkHref={`${icons}#coef-graph`}></use>
                                                    </svg>
                                                    <svg className="c-events__ico c-events__ico_self_stat">
                                                        <title>Betting on players</title>
                                                        <use xlinkHref={`${icons}#self-stat`}></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="c-events__more-wrap">
                                                <span className="c-events__more c-events__more_events"></span>
                                                <span className="c-events__more c-events__more_bets js-showMoreBets">+1589</span>
                                            </div>
                                            <div className="c-bets">
                                                <span title="1" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.16</span>
                                                <span title="Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.86</span>
                                                <span title="2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.38</span>
                                                <span title="W1 or Draw" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.37</span>
                                                <span title="W1 or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.3</span>
                                                <span title="Draw or W2" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.775</span>
                                                <span title="Total over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.632</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">2.5</span>
                                                <span title="Total under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2.48</span>
                                                <span title="Team 1 Handiсap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">3.62</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">-1.5+</span>
                                                <span title="Team 2 Handicap" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.27</span>
                                                <span title="Team 1 Total Over" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">1.81</span>
                                                <span className="c-bets__bet non c-bets__bet_sm static-event num">1.5</span>
                                                <span title="Team 1 Total Under" className="c-bets__bet c-bets__bet_coef c-bets__bet_sm">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="l-main-inner__aside l-main-inner__aside_coupon">
                    <noindex>
                        <div id="sports_right" className="l-main-aside js-aside-fixed">
                            <div className="iscroll-wrap">
                                <div className="support-widget">
                                    <img src="https://v2l.cdnsfree.com/default/img/support_in.png"/>
                                </div>
                                <div className="right_banners">
                                    <div className="w-social">
                                        <div className="w-social__item">
                                            <a className="w-social__link">
                                                <span className="w-social__icon">
                                                    <Facebook />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="w-social__item">
                                            <a className="w-social__link">
                                            <span className="w-social__icon">
                                                <Twitter/>
                                            </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="banCont latent">
                                        <div className="fz">Offers</div>
                                        <div className="right-banners-block">
                                            <div className="br-banner ">
                                                <div className="br-banner__title">Football. England. Premier League</div>
                                                <div className="br-banner-body">
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1976.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Aston Villa">Aston Villa</div>
                                                    </div>
                                                    <div className="br-banner-info">
                                                        <div className="br-banner-info__time">
                                                            <span>23.10</span><span>12:00</span>
                                                        </div>
                                                        <div className="br-banner-info__ico">
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                        </div>
                                                    </div>
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/8dafff7a4bc7ae83eb47335fae1bd0e9.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Leeds United">Leeds United</div>
                                                    </div>
                                                </div>
                                                <div className="br-banner-footer">
                                                    <div className="br-banner-footer__val br-banner-footer__val--left">2.16</div>
                                                    <a className="br-banner-footer__btn">Place a bet</a>
                                                    <div className="br-banner-footer__val br-banner-footer__val--right">3.38</div>
                                                </div>
                                            </div>
                                            <div className="br-banner ">
                                                <div className="br-banner__title">Football. Germany. Bundesliga</div>
                                                <div className="br-banner-body">
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/92849bc4fb55b0ac7e769482af213f21.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="VfB Stuttgart">VfB Stuttgart</div>
                                                    </div>
                                                    <div className="br-banner-info">
                                                        <div className="br-banner-info__time">
                                                            <span>23.10</span><span>11:30</span>
                                                        </div>
                                                        <div className="br-banner-info__ico">
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                        </div>
                                                    </div>
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/195cc0cd8ed6fc3d325bed2127599ddb.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="1. Koln">1. Koln</div>
                                                    </div>
                                                </div>
                                                <div className="br-banner-footer">
                                                    <div className="br-banner-footer__val br-banner-footer__val--left">1.89</div>
                                                    <a href="/line/Football/96463-Germany-Bundesliga/84995730-VfB-Stuttgart-1-Koln/" className="br-banner-footer__btn">Place a bet</a>
                                                    <div className="br-banner-footer__val br-banner-footer__val--right">4.08</div>
                                                </div>
                                            </div>
                                            <div className="br-banner ">
                                                <div className="br-banner__title">Football. Spain. La Liga</div>
                                                <div className="br-banner-body">
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/3482.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Elche">Elche</div>
                                                    </div>
                                                    <div className="br-banner-info">
                                                        <div className="br-banner-info__time">
                                                            <span>23.10</span><span>12:00</span>
                                                        </div>
                                                        <div className="br-banner-info__ico">
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                        </div>
                                                    </div>
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/e5f210ac37638c73fa8ef665b5b9b0fb.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Valencia">Valencia</div>
                                                    </div>
                                                </div>
                                                <div className="br-banner-footer">
                                                    <div className="br-banner-footer__val br-banner-footer__val--left">3.4</div>
                                                    <a href="/line/Football/127733-Spain-La-Liga/85023494-Elche-Valencia/" className="br-banner-footer__btn">Place a bet</a>
                                                    <div className="br-banner-footer__val br-banner-footer__val--right">2.384</div>
                                                </div>
                                            </div>
                                            <div className="br-banner ">
                                                <div className="br-banner__title">Football. Italy. Serie A</div>
                                                <div className="br-banner-body">
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/3566.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Sassuolo Calcio">Sassuolo Calcio</div>
                                                    </div>
                                                    <div className="br-banner-info">
                                                        <div className="br-banner-info__time">
                                                            <span>23.10</span><span>11:45</span>
                                                        </div>
                                                        <div className="br-banner-info__ico">
                                                            <svg className="icon"><g><use xlinkHref={`${icons}#sports_1`}></use></g></svg>
                                                        </div>
                                                    </div>
                                                    <div className="br-banner-team">
                                                        <div className="br-banner-team__image">
                                                            <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/3552.png" alt=""/>
                                                        </div>
                                                        <div className="br-banner-team__title" title="Torino">Torino</div>
                                                    </div>
                                                </div>
                                                <div className="br-banner-footer">
                                                    <div className="br-banner-footer__val br-banner-footer__val--left">1.735</div>
                                                    <a href="/line/Football/110163-Italy-Serie-A/85222645-Sassuolo-Calcio-Torino/" className="br-banner-footer__btn">Place a bet</a>
                                                    <div className="br-banner-footer__val br-banner-footer__val--right">4.58</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </noindex>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPageContent)

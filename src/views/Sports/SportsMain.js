import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from "react-id-swiper"
import icons from '../../assets/icons.svg'
import { Search } from 'react-feather'

export class SportsMain extends Component {
    render() {
        return (
            <div className="sports_main">
                <div className='hottest_games'>
                    <div className="sports_widget" style={{paddingTop:'6px'}}>
                        <div className="banner sb-header blue-sb sb-table">

                        </div>
                        <div className="event-tiles-wrap event-tiles-wrap-scrolled">
                            <div className="event-tiles event-tiles--small event-tiles--row">
                                <div className="event-tiles__item" style={{width: '370px'}}>
                                    <div className="event-tile  event-tile--small">
                                        <div className="event-tile__header">
                                            <a className="event-tile__link">England. Premier League. Round 6</a>
                                        </div>
                                        <div className="event-tile__tablo event-tile-tablo">
                                            <div className="event-tile-tablo__content">
                                                <div className="event-tile-tablo__info event-tile-tablo__info_marked">Match starts:</div>
                                                <div className="event-tile-tablo__date">
                                                    24.10 07:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-tile__content">
                                            <div className="event-tile__team">
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1986.png" className="event-tile__img"/> 
                                                <div className="event-tile__name">Fulham</div>
                                            </div>
                                            <div className="event-tile__team event-tile__team-left">
                                                <div className="event-tile__name">Crystal Palace</div>
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/2020.png" className="event-tile__img"/>
                                            </div>
                                        </div>
                                        <div className="event-tile__footer">
                                            <div className="event-odds">
                                                <div className="event-odds__header">
                                                <div className="event-odds__title">1Х2</div>
                                                <div className="event-odds__switch">
                                                    <div className="event-odds__control event-odds__prev">
                                                        <div className="fa fa-angle-left"></div>
                                                    </div>
                                                    1/4
                                                    <div className="event-odds__control event-odds__next">
                                                        <div className="fa fa-angle-right"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="event-odds__content">
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">1</div>
                                                    <div className="event-odds__num">2.62</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">Draw</div>
                                                    <div className="event-odds__num">3.36</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">2</div>
                                                    <div className="event-odds__num">2.965</div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-tiles__item" style={{width: '370px'}}>
                                    <div className="event-tile  event-tile--small">
                                        <div className="event-tile__header">
                                            <a className="event-tile__link">England. Premier League. Round 6</a>
                                        </div>
                                        <div className="event-tile__tablo event-tile-tablo">
                                            <div className="event-tile-tablo__content">
                                                <div className="event-tile-tablo__info event-tile-tablo__info_marked">Match starts:</div>
                                                <div className="event-tile-tablo__date">
                                                    24.10 07:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-tile__content">
                                            <div className="event-tile__team">
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1986.png" className="event-tile__img"/> 
                                                <div className="event-tile__name">Fulham</div>
                                            </div>
                                            <div className="event-tile__team event-tile__team-left">
                                                <div className="event-tile__name">Crystal Palace</div>
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/2020.png" className="event-tile__img"/>
                                            </div>
                                        </div>
                                        <div className="event-tile__footer">
                                            <div className="event-odds">
                                                <div className="event-odds__header">
                                                <div className="event-odds__title">1Х2</div>
                                                <div className="event-odds__switch">
                                                    <div className="event-odds__control event-odds__prev">
                                                        <div className="fa fa-angle-left"></div>
                                                    </div>
                                                    1/4
                                                    <div className="event-odds__control event-odds__next">
                                                        <div className="fa fa-angle-right"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="event-odds__content">
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">1</div>
                                                    <div className="event-odds__num">2.62</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">Draw</div>
                                                    <div className="event-odds__num">3.36</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">2</div>
                                                    <div className="event-odds__num">2.965</div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-tiles__item" style={{width: '370px'}}>
                                    <div className="event-tile  event-tile--small">
                                        <div className="event-tile__header">
                                            <a className="event-tile__link">England. Premier League. Round 6</a>
                                        </div>
                                        <div className="event-tile__tablo event-tile-tablo">
                                            <div className="event-tile-tablo__content">
                                                <div className="event-tile-tablo__info event-tile-tablo__info_marked">Match starts:</div>
                                                <div className="event-tile-tablo__date">
                                                    24.10 07:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-tile__content">
                                            <div className="event-tile__team">
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1986.png" className="event-tile__img"/> 
                                                <div className="event-tile__name">Fulham</div>
                                            </div>
                                            <div className="event-tile__team event-tile__team-left">
                                                <div className="event-tile__name">Crystal Palace</div>
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/2020.png" className="event-tile__img"/>
                                            </div>
                                        </div>
                                        <div className="event-tile__footer">
                                            <div className="event-odds">
                                                <div className="event-odds__header">
                                                <div className="event-odds__title">1Х2</div>
                                                <div className="event-odds__switch">
                                                    <div className="event-odds__control event-odds__prev">
                                                        <div className="fa fa-angle-left"></div>
                                                    </div>
                                                    1/4
                                                    <div className="event-odds__control event-odds__next">
                                                        <div className="fa fa-angle-right"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="event-odds__content">
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">1</div>
                                                    <div className="event-odds__num">2.62</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">Draw</div>
                                                    <div className="event-odds__num">3.36</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">2</div>
                                                    <div className="event-odds__num">2.965</div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-tiles__item" style={{width: '370px'}}>
                                    <div className="event-tile  event-tile--small">
                                        <div className="event-tile__header">
                                            <a className="event-tile__link">England. Premier League. Round 6</a>
                                        </div>
                                        <div className="event-tile__tablo event-tile-tablo">
                                            <div className="event-tile-tablo__content">
                                                <div className="event-tile-tablo__info event-tile-tablo__info_marked">Match starts:</div>
                                                <div className="event-tile-tablo__date">
                                                    24.10 07:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-tile__content">
                                            <div className="event-tile__team">
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1986.png" className="event-tile__img"/> 
                                                <div className="event-tile__name">Fulham</div>
                                            </div>
                                            <div className="event-tile__team event-tile__team-left">
                                                <div className="event-tile__name">Crystal Palace</div>
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/2020.png" className="event-tile__img"/>
                                            </div>
                                        </div>
                                        <div className="event-tile__footer">
                                            <div className="event-odds">
                                                <div className="event-odds__header">
                                                <div className="event-odds__title">1Х2</div>
                                                <div className="event-odds__switch">
                                                    <div className="event-odds__control event-odds__prev">
                                                        <div className="fa fa-angle-left"></div>
                                                    </div>
                                                    1/4
                                                    <div className="event-odds__control event-odds__next">
                                                        <div className="fa fa-angle-right"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="event-odds__content">
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">1</div>
                                                    <div className="event-odds__num">2.62</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">Draw</div>
                                                    <div className="event-odds__num">3.36</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">2</div>
                                                    <div className="event-odds__num">2.965</div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-tiles__item" style={{width: '370px'}}>
                                    <div className="event-tile  event-tile--small">
                                        <div className="event-tile__header">
                                            <a className="event-tile__link">England. Premier League. Round 6</a>
                                        </div>
                                        <div className="event-tile__tablo event-tile-tablo">
                                            <div className="event-tile-tablo__content">
                                                <div className="event-tile-tablo__info event-tile-tablo__info_marked">Match starts:</div>
                                                <div className="event-tile-tablo__date">
                                                    24.10 07:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-tile__content">
                                            <div className="event-tile__team">
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/1986.png" className="event-tile__img"/> 
                                                <div className="event-tile__name">Fulham</div>
                                            </div>
                                            <div className="event-tile__team event-tile__team-left">
                                                <div className="event-tile__name">Crystal Palace</div>
                                                <img src="https://v2l.cdnsfree.com/sfiles/logo_teams/2020.png" className="event-tile__img"/>
                                            </div>
                                        </div>
                                        <div className="event-tile__footer">
                                            <div className="event-odds">
                                                <div className="event-odds__header">
                                                <div className="event-odds__title">1Х2</div>
                                                <div className="event-odds__switch">
                                                    <div className="event-odds__control event-odds__prev">
                                                        <div className="fa fa-angle-left"></div>
                                                    </div>
                                                    1/4
                                                    <div className="event-odds__control event-odds__next">
                                                        <div className="fa fa-angle-right"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="event-odds__content">
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">1</div>
                                                    <div className="event-odds__num">2.62</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">Draw</div>
                                                    <div className="event-odds__num">3.36</div>
                                                </div>
                                                <div className="event-odds__item">
                                                    <div className="event-odds__name">2</div>
                                                    <div className="event-odds__num">2.965</div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='c-section'>
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
                    </div>
                </div>
            </div>
        )
    }
}

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

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsMain)

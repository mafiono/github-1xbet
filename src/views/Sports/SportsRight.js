import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Archive, Circle, DollarSign, Facebook, FileText, HelpCircle, Play, Search, Twitter } from 'react-feather'
import icons from '../../assets/icons.svg'

export class SportsRight extends Component {
    render() {
        return (
            <div className='sports_right'>
                <div className="l-main-inner__aside l-main-inner__aside_coupon">
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsRight)

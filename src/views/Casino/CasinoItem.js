import React from "react"
import { Root } from "../../authServices/rootconfig";
import { Play, Star } from "react-feather";

export const CasinoItem = (props)=> {
    const freePlay = ()=>{
        props.me.playsaccountguest(props.data);
    }
    const realPlay = ()=>{
        if(!props.me.user.values){
            props.me.setloginpage({login : true, register : false});
        }else{
            props.me.playsaccount(props.me.user.values,props.data,true);
        }
    }
    var params = props.data;
    let imageuri = params ? ( params.image ? params.image.length > 0 ? params.image.slice(0,5) === "https" ? params.image : Root.imageurl + params.image : "" : "") :'';
    return (
        <div className="casino-games__item-wrap">
            <div className="casino-games__bg">
                <div className="casino-games__item" style={{backgroundImage:`url(${imageuri})`}}>
                    <div className="casino-games__overlay">
                        <div className="casino-games__buttons">
                            <Star className="casino-games__fav"/>    
                            <div className="casino-games__play-wrap show">
                                <Play className="casino-games__play" onClick={()=>realPlay()}/>
                            </div>
                        </div>
                        <div className="casino-games__playfree-wrap">
                            <span className="casino-games__playfree" onClick={()=>freePlay()}>Play for free</span>
                        </div>
                    </div>
                    <div className="casino-games__ribbons">
                        <div className="casino-games__ribbon casino-games__ribbon--orange">Promo</div>
                        <div className="casino-games__ribbon casino-games__ribbon--gold">Hot</div>
                        <div className="casino-games__ribbon casino-games__ribbon--green">New</div>
                        <div className="casino-games__ribbon casino-games__ribbon--blue">blue</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const LiveCasinoItem = (props)=> {
    const realPlay = ()=>{
        if(!props.me.user.values){
            props.me.setloginpage({login : true, register : false});
        }else{
            props.me.playsaccount(props.me.user.values,props.data);
        }
    }
    var params = props.data;
    let imageuri = params ? ( params.image ? params.image.length > 0 ? params.image.slice(0,5) === "https" ? params.image : Root.imageurl + params.image : "" : "") :'';
    return (
        <div className="live-casino-games__item-wrap" onClick={()=>realPlay()}>
            <div className="live-casino-games__bg">
                <div title="Blackjack 6" className="live-casino-games__item" style={{backgroundImage:`url(${imageuri})`}}>
                    <div className="live-casino-games__window">
                        <img src="https://v2l.cdnsfree.com/genfiles/slots/games/353/ovr34559.png" className="live-casino-games__prov"/> 
                        <div className="live-casino-games__langs">
                            {/* <img src="/genfiles/slots/casino_lobby/xcasino/flags/live-casino-flag-eng.png" className="live-casino-games__lang"/> */}
                        </div>
                        <img src="https://v2l.cdnsfree.com/genfiles/slots/casino_lobby/mini_logo/46.png" className="live-casino-games__provider"/> 
                        <div className="live-casino-games__ribbons">
                            <div className="live-casino-games__ribbon live-casino-games__ribbon--green">
                                Cashback 11%
                            </div>
                            <div className="live-casino-games__ribbon live-casino-games__ribbon--blue">
                                Cashback 11%
                            </div>
                            <div className="live-casino-games__plus"></div>
                        </div>
                        <div className="live-casino-games__desc">
                            <div className="live-casino-games__text">
                                <div className="live-casino-games__name">{props.data.TYPE.toLocaleUpperCase()}</div>
                            </div>
                            <div className="live-casino-games__info">
                                <div className="live-casino-games__limit"><span>0.5 - 500 EUR</span> 
                                    <img src={require('../../assets/img/pages/money-icon.png')} className="live-casino-games__limit-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
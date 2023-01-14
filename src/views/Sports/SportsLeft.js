import React, { Component } from 'react'
import { connect } from 'react-redux'
import icons from '../../assets/icons.svg'

export class SportsLeft extends Component {
    render() {
        return (
            <div className='sports_left'>
                <div className="left_menuEventCon without_top">
                    <div className="left_menuEventCon_slide">
                        <div className="inner-content">
                            <div className="fixLeftMenuBut left active">
                                <span></span>
                            </div>
                            <div className="ls-panel">
                                <div className="ls-panel__head">

                                </div>
                            </div>
                            <div className="assideCon">
                                <div className="assideCon_head eventHeadMenu notHover2 greenHren live-left-menu">
                                    <div className="name">
                                        <div className=" left">
                                            Sports. A–Z                                
                                        </div>
                                    </div>
                                </div>
                                <div className="assideCon_body not_top">
                                    <ul className="sport_menu">
                                        {
                                            sportData.map((item, key)=>(
                                                <li key={key}>
                                                    <a className="link">
                                                        <svg className="icon"><g><use xlinkHref={`${icons}#${item.icon}`}></use></g></svg>
                                                        <span className="sname">{item.name}</span> <span className="snum">({item.number})</span>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const sportData = [
    {
        icon:'sports_1',
        name:'Football',
        number:'1'
    },
    {
        icon:'sports_2',
        name:'Football',
        number:'2'
    },
    {
        icon:'sports_3',
        name:'Football',
        number:'3'
    },
    {
        icon:'sports_4',
        name:'Football',
        number:'4'
    },
    {
        icon:'sports_5',
        name:'Football',
        number:'5'
    },
    {
        icon:'sports_6',
        name:'Football',
        number:'6'
    },
    {
        icon:'sports_7',
        name:'Football',
        number:'7'
    },
    {
        icon:'sports_8',
        name:'Football',
        number:'8'
    },
    {
        icon:'sports_9',
        name:'Football',
        number:'9'
    },
    {
        icon:'sports_10',
        name:'Football',
        number:'10'
    },
    {
        icon:'sports_11',
        name:'Football',
        number:'11'
    },
    {
        icon:'sports_12',
        name:'Football',
        number:'12'
    },
    {
        icon:'sports_13',
        name:'Football',
        number:'13'
    },
    {
        icon:'sports_14',
        name:'Football',
        number:'14'
    },
    {
        icon:'sports_15',
        name:'Football',
        number:'15'
    },
    {
        icon:'sports_16',
        name:'Football',
        number:'16'
    },
    {
        icon:'sports_17',
        name:'Football',
        number:'17'
    },
    {
        icon:'sports_18',
        name:'Football',
        number:'18'
    },
    {
        icon:'sports_19',
        name:'Football',
        number:'19'
    },
    {
        icon:'sports_20',
        name:'Football',
        number:'20'
    },
    {
        icon:'sports_21',
        name:'Football',
        number:'21'
    },
    {
        icon:'sports_22',
        name:'Football',
        number:'22'
    },
    {
        icon:'sports_23',
        name:'Football',
        number:'23'
    },
    {
        icon:'sports_24',
        name:'Football',
        number:'24'
    },
    {
        icon:'sports_25',
        name:'Football',
        number:'25'
    },
    {
        icon:'sports_26',
        name:'Football',
        number:'26'
    },
    {
        icon:'sports_27',
        name:'Football',
        number:'27'
    },
    {
        icon:'sports_28',
        name:'Football',
        number:'28'
    },
    {
        icon:'sports_29',
        name:'Football',
        number:'29'
    },
]
const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsLeft)

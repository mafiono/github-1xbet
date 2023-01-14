import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SportsLeft } from './SportsLeft'
import { SportsMain } from './SportsMain'
import { SportsRight } from './SportsRight'

export class Sports extends Component {
    render() {
        return (
            <div className='sports_page'>
                <SportsLeft/>
                <SportsMain/>
                <SportsRight/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Sports)

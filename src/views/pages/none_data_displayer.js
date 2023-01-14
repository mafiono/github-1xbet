import React, { Component } from 'react'
import { connect } from 'react-redux'

export class none_data_displayer extends Component {
    render() {
        return (
            <div style={{height:'20rem',width:"100%"}}>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(none_data_displayer)

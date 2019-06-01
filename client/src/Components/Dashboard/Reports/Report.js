import React, { Component } from 'react'

class Report extends Component {
    constructor() {
        super() 
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.location.state.report)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Report
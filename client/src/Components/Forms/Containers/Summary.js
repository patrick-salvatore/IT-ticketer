import React, { Component } from 'react'
import { connect } from 'react-redux'

class Summary extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount () {
      console.log(this.props.Report)
    }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Report: state
  }
}

export default connect(mapStateToProps, null)(Summary)
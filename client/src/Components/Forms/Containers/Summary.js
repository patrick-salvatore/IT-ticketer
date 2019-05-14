import React, { Component } from 'react'

import HIGH_RISK_CONTENT from '../Items/content'
import Navbar from '../../Home/Navbar/Navbar'
import TextArea from '../Items/TextArea'

class Summary extends Component {
    constructor() {
        super() 
        this.state = {
            action: '' 
        }
    }

    changeHandler = (e) => {
        const value = e.target === 'radio' ? e.target.radio : e.target.value
        const name = e.target.name
        this.setState(() => ( 
          {[name]: value}
        ), () => console.log(this.state))
    }

  render() {
    return (
    <div>
        <Navbar/>
        <div className = 'container'> 
        <h1>HIGH RISK</h1>
            <textarea rows = '8' cols = "100" readOnly defaultValue = {HIGH_RISK_CONTENT}/>
            <h5> Below please provide details and required action </h5>
            <TextArea
                  type = 'text'
                  name = 'action'
                  rows = '5'
                  cols = '60'
                  placeholder = 'Your actions here'
                  value = {this.state.action}
                  onChange = {this.changeHandler}
            />
        </div>
      </div>
    )
  }
}

export default Summary;
import React, { Component } from 'react'
import Navbar from '../../Home/Navbar/Navbar'

// react-router
import {Link} from 'react-router-dom'

// components
import Input from '../Items/Input'
import TextArea from '../Items/TextArea' 
import CheckboxList from '../Items/Checklist.js/CheckboxList'

export default class Questionaire extends Component {
  constructor() {
    super()
    this.state = {
      questions: {
        q1: '', 
        q2: '',
        q3: '', 
        q4: '', 
        q5: '', 
        q6: '',
      }
    }
  }

  changeHandler = (e) => {
    const value = e.target === 'radio' ? e.target.radio : e.target.value
    const name = e.target.name
    const questions = { [name]: value }
    this.setState(() => ( 
      {questions}
    ), () => console.log(this.state))
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className = 'container'> 
        <h1>Risk Factors Questionaire</h1>
        <p>Please answer the following questions to provide more information about the issue</p>
          <div className = 'row'>
            <form>
              <Input 
                title = 'Which IT systems, equipment or devices are involved in the security breach?'
                type = 'text'
                name = 'q1'
                placeholder = 'Answer'
                value = {this.state.questions.q1}
                onChange = {this.changeHandler}
              />
              <Input 
                title = 'What information has been lost or compromised?'
                type = 'text'
                name = 'q2'
                placeholder = 'Answer'
                value = {this.state.questions.q2}
                onChange = {this.changeHandler}
              />
              <Input 
                title = 'How much information has been lost?'
                type = 'text'
                name = 'q3'
                placeholder = 'Answer'
                value = {this.state.questions.q3}
                onChange = {this.changeHandler}
              />
              <Input 
                title = 'Is the information Client Based?'
                type = 'text'
                name = 'q3'
                placeholder = 'Answer'
                value = {this.state.questions.q4}
                onChange = {this.changeHandler}
              />
              <Input 
                title = 'If the incident involves the loss of a laptop or portable device, did the device contain Client Data. Was the information, backed up onto Druva systems?'
                type = 'text'
                name = 'q3'
                placeholder = 'Answer'
                value = {this.state.questions.q4}
                onChange = {this.changeHandler}
              />
              <Input
                title = "Does it include records of operational, legal or evidential value to the HealthSTAR or its Clients?"
                type = 'text'
                placeholder = 'Answer'
                value = {this.state.questions.q5}
                onChange = {this.changeHandler}
              />
              <label className = 'form-group-label font-weight-bold'> Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable? </label>
              <div className = 'row'> 
                  <Input
                  title = 'Yes'
                  type = 'radio'
                  name = 'q6'
                  value = 'yes'
                  onChange =  {this.changeHandler}
                  />
                  <Input
                  title = 'No'
                  type = 'radio'
                  name = 'q6'
                  value = 'no'
                  onChange =  {this.changeHandler}
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


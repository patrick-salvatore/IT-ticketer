import React, { Component } from 'react'
import HIGH_RISK_CONTENT from '../Items/content'
import {sendFormToState} from '../../../Actions/ReportActions'

// react-router & redux 
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// components
import Input from '../Items/Input'
import TextArea from '../Items/TextArea'


class Questionaire extends Component {
  constructor() {
    super()
    this.state = {
      questions: {
        question_1: '', question_2: '', question_3: '', question_4: '', question_5: '', question_6: '', question_7: '', question_8: '', question_9: '', question_10: '', question_11: '', action: ''
      }, 
    }
  }

  changeHandler = (e) => {
    const value = e.target === 'radio' ? e.target.radio : e.target.value
    const name = e.target.name
    const questions = { ...this.state.questions, [name]: value }
    this.setState(() => ( 
      { questions }
    ))
  } 

  saveHandler = (e) => {
    this.props.onSave(this.state.questions)
  }
    
  render() {
    return (
      <div className = 'container'> 
        <h1>Risk Factors Questionnaire</h1>
        <p>Please answer the following questions to provide more information about the issue</p>
          <div className = 'row'>
            <div className = 'formContainer' style = {{padding: '10px'}}>
              <form>
                <Input 
                  title = 'Which IT systems, equipment or devices are involved in the security breach?'
                  type = 'text'
                  name = 'question_1'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_1}
                  onChange = {this.changeHandler}
                />
                <Input 
                  title = 'What information has been lost or compromised?'
                  type = 'text'
                  name = 'question_2'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_2}
                  onChange = {this.changeHandler}
                />
                <Input 
                  title = 'How much information has been lost?'
                  type = 'text'
                  name = 'question_3'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_3}
                  onChange = {this.changeHandler}
                />
                <Input 
                  title = 'Is the information client based?'
                  type = 'text'
                  name = 'question_4'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_4}
                  onChange = {this.changeHandler}
                />
                <Input 
                  title = 'If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?'
                  type = 'text'
                  name = 'question_5'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_5}
                  onChange = {this.changeHandler}
                />
                <Input
                  title = "Does it include records of operational, legal or evidential value to the company or its clients?"
                  type = 'text'
                  name = 'question_6'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_6}
                  onChange = {this.changeHandler}
                />
                <label className = 'form-group-label font-weight-bold'>Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                <div className = 'row' style = {{marginLeft: '3px'}}> 
                  <Input
                  title = 'Yes'
                  type = 'radio'
                  name = 'question_7'
                  value = 'yes'
                  onChange =  {this.changeHandler}
                  />
                  <Input
                  title = 'No'
                  type = 'radio'
                  name = 'question_7'
                  value = 'no'
                  onChange =  {this.changeHandler}
                  />
                </div>
                <Input
                  title = 'How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?'
                  type = 'text'
                  name = 'question_8'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_8}
                  onChange = {this.changeHandler}
                />
                <Input
                  title = 'Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?'
                  type = 'text'
                  name = 'question_9'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_9}
                  onChange = {this.changeHandler}
                /> 
                <Input
                  title = 'Is the information bound by any contractual security arrangements e.g. to clients?'
                  type = 'text'
                  name = 'question_10'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_10}
                  onChange = {this.changeHandler}
                />
                <Input
                  title = 'Is any of the information confidential?'
                  type = 'text'
                  name = 'question_11'
                  placeholder = 'Answer'
                  value = {this.state.questions.question_11}
                  onChange = {this.changeHandler}
                />  

                <h4>HIGH RISK</h4>
                <textarea rows = '8' cols = "100" readOnly defaultValue = {HIGH_RISK_CONTENT} style = {{border: "2px solid black"}}/>
                
                <h5> Below please provide details and required action if incident is deemed "High Risk"</h5>
                <TextArea
                  type = 'text'
                  name = 'action'
                  rows = '5'
                  cols = '20'
                  placeholder = 'Your actions here'
                  value = {this.state.questions.action}
                  onChange = {this.changeHandler}
                />
              </form>
              <Link to ='/summary'><button onClick = {this.saveHandler} className = 'btn btn-primary'> Next </button></Link>
            </div> 
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: form => {
      dispatch(sendFormToState(form))
    }
  }
}

export default connect(null, mapDispatchToProps)(Questionaire)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from "../Items/Input"
import TextArea from "../Items/TextArea"

class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
          Report: {}
        }
    }

    componentWillMount() {
      this.setState((this.props.Report))
    }
    
    handleSave = (e) => {
      fetch('http://localhost:4000/API/reports', {method: 'post', body: JSON.stringify(this.state), headers: {"Content-Type": "application/json"}})
        .then(res => console.log(res.json()))
    }

  render() {
    return (
      <div className = 'container'>
        <div className = 'formContainer'>
        <h3>Checklist Summary</h3>
        <hr/>
        <h5 style = {{textDecoration: 'underline'}}>General</h5>
        <form onSubmit = {this.handleSave} >
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
              <div className = 'col-6'>
                <Input title = "Date:" value = { this.state.Report.date }/>
                <Input title = "Incident Title:" value = { this.state.Report.title }/>
                <Input title = "Description:" value = { this.state.Report.description }/>
                <Input title = "Type:" value = { this.state.Report.incident_type }/>
                <Input title = "Severity:" value = { this.state.Report.incident_severity }/>
              </div>
              <div className = 'col-6'>
                <label className = "font-weight-bold">Client:</label>
                <Input title = "Name:" value = { this.state.Report.owner_name }/>
                <Input title = "Email:" value = { this.state.Report.owner_email } />
                <Input title = "Telephone #:" value = { this.state.Report.owner_tel }/>
                <Input title = "Address:" value = { this.state.Report.owner_add }/>
              </div>        
            </div>
          </div>
          <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
                <div className = 'col-12'>
                  <label className = 'font-weight-bold'>1. Which IT systems, equipment or devices are involved in the security breach?</label>
                    <Input value = { this.state.Report.question_1 }  />
                  <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                    <Input value = { this.state.Report.question_2 }  />
                  <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                    <Input value = { this.state.Report.question_3 }  />
                  <label className = 'font-weight-bold'>4. Is the information client based?</label>
                    <Input value = { this.state.Report.question_4 }  />
                  <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?</label>
                    <Input value = { this.state.Report.question_5 } />
                  <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the company or its clients?</label>
                    <Input value = { this.state.Report.question_6} />
                  <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                    <Input value = { this.state.Report.question_7} />
                  <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                    <Input value = { this.state.Report.question_8} />
                  <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?</label>
                    <Input value = { this.state.Report.question_9} />
                  <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to clients?</label>
                    <Input value = { this.state.Report.question_10} />
                  <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                    <Input value = { this.state.Report.question_11} />
                  <label className = 'font-weight-bold'>12. High Risk Action </label>
                    <TextArea value = { this.state.Report.action} />
                </div>
              </div>
          </div>
          <button className = 'btn btn-success' type = 'submit'> Save </button>
        </form>
        </div>
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
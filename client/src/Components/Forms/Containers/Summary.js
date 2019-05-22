import React, { Component } from 'react'
import { connect } from 'react-redux'
import Input from "../Items/Input"
import TextArea from "../Items/TextArea"


class Summary extends Component {
    constructor() {
        super()
        this.state = {}
        // this.url = 'http://localhost:4000/API/reports'
    }

    componentWillMount() {
      this.setState(() => (this.props.Report), () => {console.log(this.state.Report)})
    }
  
    handleSave = (e) => {
      fetch('http://localhost:4000/API/reports', {method: 'post', body: JSON.stringify(this.state), headers: {"Content-Type": "application/json"}})
        .then(res => console.log(res.json()))
    }

  render() {
    return (
      <div className = 'container'>
        <h3>Checklist Summary</h3>
        <hr/>
        <h5 style = {{textDecoration: 'underline'}}>General</h5>
        <form onSubmit = {this.handleSave} >
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
              <div className = 'col-6'>
                <Input title = "Date:" readOnly value = { this.state.Report.date }></Input>
                <Input title = "Incident Title:" readOnly value = { this.state.Report.incident_title }></Input>
                <Input title = "Description:" readOnly value = { this.state.Report.incident_desc }></Input>
                <Input title = "Type:" readOnly value = { this.state.Report.incident_type }></Input>
                <Input title = "Severity:" readOnly value = { this.state.Report.incident_severity }></Input>
              </div>
              <div className = 'col-6'>
                <label className = "font-weight-bold">Client:</label>
                <Input title = "Name:" readOnly value = { this.state.Report.owner_name }></Input>
                <Input title = "Email:" readOnly value = { this.state.Report.owner_email } ></Input>
                <Input title = "Telephone #:" readOnly value = { this.state.Report.owner_tel }></Input>
                <Input title = "Address:" readOnly value = { this.state.Report.owner_add }></Input>
              </div>        
            </div>
          </div>
          <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
                <div className = 'col-12'>
                  <Input title = "Address:" readOnly value = { this.state.Report.owner_add }></Input>
                  <label className = 'font-weight-bold'> 1. Which IT systems, equipment or devices are involved in the security breach?</label>
                    <Input readOnly value = { this.state.Report.q1 } />
                  <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                    <Input readOnly value = { this.state.Report.q2 } />
                  <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                    <Input readOnly value = { this.state.Report.q3 } />
                  <label className = 'font-weight-bold'>4. Is the information Client Based?</label>
                    <Input readOnly value = { this.state.Report.q4 } />
                  <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain Client Data. Was the information, backed up onto Druva systems?</label>
                    <Input readOnly value = { this.state.Report.q5 }/>
                  <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the HealthSTAR or its Clients?</label>
                    <Input readOnly value = { this.state.Report.q6}/>
                  <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                    <Input readOnly value = { this.state.Report.q7}/>
                  <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                    <Input readOnly value = { this.state.Report.q8}/>
                  <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for HealthSTAR or its Clients?</label>
                    <Input readOnly value = { this.state.Report.q9}/>
                  <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to Clients?</label>
                    <Input readOnly value = { this.state.Report.q10}/>
                  <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                    <Input readOnly value = { this.state.Report.q11}/>
                  <label className = 'font-weight-bold'>12. High Risk Action </label>
                    <TextArea readOnly value = { this.state.Report.action}/>
                </div>
              </div>
          </div>
          <button className = 'btn btn-success' type = 'submit'> Save </button>
        </form>
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
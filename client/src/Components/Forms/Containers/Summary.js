import React, { Component } from 'react'
import { connect } from 'react-redux'

class Summary extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentWillMount() {
      this.setState(() => (this.props.Report), () => {console.log(this.state)})
    }

    handleSave = () => {
      console.log(this.state)
    }

  render() {
    return (
      <div className = 'container'>
        <h3>Checklist Summary</h3>
        <hr/>
        <h5 style = {{textDecoration: 'underline'}}>General</h5>
        <div style = {{marginTop: '10px', marginLeft: '15px'}}>
          <div className = 'row'>
            <div className = 'col-6'>
              <label className = 'font-weight-bold'>Date:</label>
                <p> { this.state.Report.date } </p>
              <label className = 'font-weight-bold'>Incident Title:</label>
                <p> { this.state.Report.incident_title } </p>
            </div>
            <div className = 'col-6'>
              <label className = 'font-weight-bold'>Owner Details:</label>
                <p> { this.state.Report.owner_name } </p>
                <p> { this.state.Report.owner_email } </p>
                <p> { this.state.Report.owner_tel } </p>
                <p> { this.state.Report.owner_add } </p>
              <label className = 'font-weight-bold'>Description:</label>
                <p> { this.state.Report.incident_desc } </p>
              <label className = 'font-weight-bold'>Type:</label>
                <p>{ this.state.Report.incident_type }</p>
              <label className = 'font-weight-bold'>Severity:</label>
                <p>{ this.state.Report.incident_severity }</p>
            </div>        
          </div>
        </div>
        <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
        <div style = {{marginTop: '10px', marginLeft: '15px'}}>
          <div className = 'row'>
              <div className = 'col-12'>
                <label className = 'font-weight-bold'>1. Which IT systems, equipment or devices are involved in the security breach?</label>
                  <p> { this.state.Report.q1 } </p>
                <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                  <p> { this.state.Report.q2 } </p>
                <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                  <p> { this.state.Report.q3 } </p>
                <label className = 'font-weight-bold'>4. Is the information Client Based?</label>
                  <p> { this.state.Report.q4 } </p>
                <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain Client Data. Was the information, backed up onto Druva systems?</label>
                  <p> { this.state.Report.q5 }</p>
                <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the HealthSTAR or its Clients?</label>
                  <p> { this.state.Report.q6}</p>
                <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                  <p> { this.state.Report.q7}</p>
                <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                  <p> { this.state.Report.q8}</p>
                <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for HealthSTAR or its Clients?</label>
                  <p> { this.state.Report.q9}</p>
                <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to Clients?</label>
                  <p> { this.state.Report.q10}</p>
                <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                  <p> { this.state.Report.q11}</p>
                <label className = 'font-weight-bold'>12. High Risk Action </label>
                  <p> { this.state.Report.action}</p>
              </div>
            </div>
        </div>
        <button onClick = {this.handleSave} className = 'btn btn-success'> Save </button>
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
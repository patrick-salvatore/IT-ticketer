import React, {Component} from 'react'
import { connect } from 'react-redux'
import {sendFormToState} from '../../../Actions/ReportActions'


//  components
import Input from '../../Forms/Items/Input'
import TextArea from '../../Forms/Items/TextArea'

// router 
import {Link} from 'react-router-dom'

class Report extends Component {

  handleDelete = (ID) => {
    fetch(`http://localhost:4000/API/reports/${ID}`, {method: 'DELETE'})
  }

  render() {
    const Report = this.props.location.state.report
    return (
        <div className = 'container' >
        <div className = 'formContainer' style = {{padding: '10px'}}>
        <h3>Checklist Summary</h3>
        <hr/>
        <h5 style = {{textDecoration: 'underline'}}>General</h5>
        <form>
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
              <div className = 'col-6'>
                <Input title = "Date:" readOnly value = { Report.date }></Input>
                <Input title = "Incident Title:" readOnly value = { Report.title }></Input>
                <Input title = "Description:" readOnly value = { Report.description }></Input>
                <Input title = "Type:" readOnly value = { Report.incident_type }></Input>
                <Input title = "Severity:" readOnly value = { Report.incident_severity }></Input>
              </div>
              <div className = 'col-6'>
                <label className = "font-weight-bold">Client:</label>
                <Input title = "Name:" readOnly value = { Report.owner_name }></Input>
                <Input title = "Email:" readOnly value = { Report.owner_email } ></Input>
                <Input title = "Telephone #:" readOnly value = { Report.owner_tel }></Input>
                <Input title = "Address:" readOnly value = { Report.owner_add }></Input>
              </div>        
            </div>
          </div>
          <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
                <div className = 'col-12'>
                  <Input title = "Address:" readOnly value = { Report.owner_add }></Input>
                  <label className = 'font-weight-bold'>1. Which IT systems, equipment or devices are involved in the security breach?</label>
                    <Input readOnly value = { Report.question_1 } />
                  <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                    <Input readOnly value = { Report.question_2 } />
                  <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                    <Input readOnly value = { Report.question_3 } />
                  <label className = 'font-weight-bold'>4. Is the information client based?</label>
                    <Input readOnly value = { Report.question_4 } />
                  <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?</label>
                    <Input readOnly value = { Report.question_5 }/>
                  <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the company or its clients?</label>
                    <Input readOnly value = { Report.question_6}/>
                  <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                    <Input readOnly value = { Report.question_7}/>
                  <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                    <Input readOnly value = { Report.question_8}/>
                  <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?</label>
                    <Input readOnly value = { Report.question_9}/>
                  <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to clients?</label>
                    <Input readOnly value = { Report.question_10}/>
                  <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                    <Input readOnly value = { Report.question_1}/>
                  <label className = 'font-weight-bold'>12. High Risk Action </label>
                    <TextArea readOnly value = { Report.action}/>
                </div>
              </div>
          </div>
          <Link to = {{pathname: `/edit`}} onClick = {() => this.props.sendForm(Report)}><button className = 'btn btn-warning' type = 'submit'> Edit </button></Link>
          <Link to = {{pathname: `/`}} ><button onClick = {() => this.handleDelete(Report.ID)} className = 'btn btn-danger' style = {{marginLeft: '5px'}}> Delete </button></Link>
        </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendForm: form => {
      dispatch(sendFormToState(form))
    }
  }
}


export default connect(null, mapDispatchToProps)(Report)
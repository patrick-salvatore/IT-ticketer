import React, {Component} from 'react'
import { connect } from 'react-redux'

//  components 
import Input from '../../Forms/Items/Input'
import TextArea from '../../Forms/Items/TextArea'

// router 
import {Link} from 'react-router-dom'

class Edit extends Component {
    constructor() {
        super()
        this.state = {
            Report: {}
        }
    }

  componentWillMount() {
      this.setState({Report: this.props.Report.Report})
  }

  handleEdit = (e) => {
    fetch('http://localhost:4000/API/reports', {method: 'post', body: JSON.stringify(this.state), headers: {"Content-Type": "application/json"}})
      .then(res => console.log(res.json()))
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const Report = {...this.state.Report, [name]: value}
    this.setState(() => ( 
      {Report}
    ), console.log(this.state.Report))
  } 

  render() {
    const {Report}  = this.state
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
                <Input name = 'date' title = "Date:" value = { Report.date } onChange = {this.handleChange}></Input>
                <Input name = 'title' title = "Incident Title:" value = { Report.title}  onChange = {this.handleChange}></Input>
                <Input name = 'incident_desc' title = "Description:" value = { Report.description } onChange = {this.handleChange}></Input>
                <Input name = 'incident_type'title = "Type:" value = { Report.incident_type } onChange = {this.handleChange}></Input>
                <Input name = 'incident_severity' title = "Severity:" value = { Report.incident_severity } onChange = {this.handleChange}></Input>
              </div>
              <div className = 'col-6'>
                <label className = "font-weight-bold">Client:</label>
                <Input name = 'owner_name' title = "Name:" value = { Report.owner_name } onChange = {this.handleChange}></Input>
                <Input name = 'owner_email' title = "Email:" value = { Report.owner_email }  onChange = {this.handleChange}></Input>
                <Input name = 'owner_tel' title = "Telephone #:" value = { Report.owner_tel } onChange = {this.handleChange}></Input>
                <Input name = 'owner_add' title = "Address:" value = { Report.owner_add } onChange = {this.handleChange}></Input>
              </div>        
            </div>
          </div>
          <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
          <div style = {{marginTop: '10px', marginLeft: '15px'}}>
            <div className = 'row'>
                <div className = 'col-12'>
                  <label className = 'font-weight-bold'>1. Which IT systems, equipment or devices are involved in the security breach?</label>
                    <Input name = 'question_2' value = { Report.question_1 }  onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                    <Input name = 'question_3' value = { Report.question_2 }  onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                    <Input name = 'question_4' value = { Report.question_3 }  onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>4. Is the information client based?</label>
                    <Input name = 'question_5' value = { Report.question_4 }  onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?</label>
                    <Input name = 'question_6' value = { Report.question_5 } onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the company or its clients?</label>
                    <Input name = 'question_7' value = { Report.question_6} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                    <Input name = 'question_7' value = { Report.question_7} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                    <Input name = 'question_8' value = { Report.question_8} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?</label>
                    <Input name = 'question_9' value = { Report.question_9} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to clients?</label>
                    <Input name = 'question_10' value = { Report.question_10} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                    <Input name = 'question_11' value = { Report.question_11} onChange = {this.handleChange}/>
                  <label className = 'font-weight-bold'>12. High Risk Action </label>
                    <TextArea name = 'action' value = { Report.action} onChange = {this.handleChange}/>
                </div>
              </div>
          </div>
          <Link to = {{pathname: `/report/${Report.ID}`}} ><button  className = 'btn btn-success' style = {{marginLeft: '5px'}}> Submit </button></Link>
        </form>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (Report) => {
    return {Report}
}


export default connect(mapStateToProps, null)(Edit)
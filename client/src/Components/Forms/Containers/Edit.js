import React, { Component } from 'react'

//  components
import Input from '../../Forms/Items/Input'
import TextArea from '../../Forms/Items/TextArea'

// router 
import {Link} from 'react-router-dom'

class Edit extends Component {  
  render(){
        const Report = this.props.location.state
        console.log(Report)
        return (
            <div className = 'container'>
            <div className = 'formContainer'>
            <h3>Checklist Summary</h3>
            <hr/>
            <h5 style = {{textDecoration: 'underline'}}>General</h5>
            <form>
              <div style = {{marginTop: '10px', marginLeft: '15px'}}>
                <div className = 'row'>
                  <div className = 'col-6'>
                    <Input title = "Date:" value = { Report.createdAt }></Input>
                    <Input title = "Incident Title:" value = { Report.title }></Input>
                    <Input title = "Description:" value = { Report.description }></Input>
                    <Input title = "Type:" value = { Report.incident_type }></Input>
                    <Input title = "Severity:" value = { Report.incident_severity }></Input>
                  </div>
                  <div className = 'col-6'>
                    <label className = "font-weight-bold">Client:</label>
                    <Input title = "Name:" value = { Report.owner_name }></Input>
                    <Input title = "Email:" value = { Report.owner_email } ></Input>
                    <Input title = "Telephone #:" value = { Report.owner_tel }></Input>
                    <Input title = "Address:" value = { Report.owner_add }></Input>
                  </div>        
                </div>
              </div>
              <h5 style = {{textDecoration: 'underline'}}>Questionnaire</h5>
              <div style = {{marginTop: '10px', marginLeft: '15px'}}>
                <div className = 'row'>
                    <div className = 'col-12'>
                      <Input title = "Address:" value = { Report.owner_add }></Input>
                      <label className = 'font-weight-bold'>1. Which IT systems, equipment or devices are involved in the security breach?</label>
                        <Input value = { Report.question_1 } />
                      <label className = 'font-weight-bold'>2. What information has been lost or compromised?</label>
                        <Input value = { Report.question_2 } />
                      <label className = 'font-weight-bold'>3. How much information has been lost?</label>
                        <Input value = { Report.question_3 } />
                      <label className = 'font-weight-bold'>4. Is the information client based?</label>
                        <Input value = { Report.question_4 } />
                      <label className = 'font-weight-bold'>5. If the incident involves the loss of a laptop or portable device, did the device contain client Data. Was the information, backed up onto Druva systems?</label>
                        <Input value = { Report.question_5 }/>
                      <label className = 'font-weight-bold'>6. Does it include records of operational, legal or evidential value to the company or its clients?</label>
                        <Input value = { Report.question_6}/>
                      <label className = 'font-weight-bold'>7. Is it business-critical? Do users rely on access to this information asset or can they use reliable electronic copies or alternative manual processes e.g. paper files if the information asset is unavailable?</label>
                        <Input value = { Report.question_7}/>
                      <label className = 'font-weight-bold'>8. How urgently would access need to be restored to an information asset to resume business or, to return to the required standard of service?</label>
                        <Input value = { Report.question_8}/>
                      <label className = 'font-weight-bold'>9. Will the loss or compromise of the information have adverse operational, financial legal, liability or reputational consequences for company or its clients?</label>
                        <Input value = { Report.question_9}/>
                      <label className = 'font-weight-bold'>10. Is the information bound by any contractual security arrangements e.g. to clients?</label>
                        <Input value = { Report.question_10}/>
                      <label className = 'font-weight-bold'>11. Is any of the information confidential?</label>
                        <Input value = { Report.question_1}/>
                      <label className = 'font-weight-bold'>12. High Risk Action </label>
                        <TextArea value = { Report.action}/>
                    </div>
                  </div>
              </div>
              <Link to = ''><button className = 'btn btn-warning' type = 'submit'> Edit </button></Link>
            </form>
            </div>
          </div>
        )
    }
  }

export default Edit
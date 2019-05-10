import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';

import Input from './Input'
import TextArea from './TextArea' 
import Checkbox from './Checkbox'

// new form container the handled the state interpulation and makes API calls

export default class NewForm extends Component {
  constructor() {
    super() 
    this.state = {
      validated: false,
      formFields: {
        date: '',
        incident_title: '', 
        incident_owner: '',
        owner_email: '',
        owner_tel: '', 
        owner_add: '',  
        incident_desc: '',
        incident_type: '',

      }
    }
  }

  changeHandler = (e) => {
    let value = e.target.value
    let name = e.target.name
    let formFields = {...this.state.formFields, [name]: value}
    this.setState(() => ( 
      {formFields}
    ), () => console.log(this.state))
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className = 'container'>
        <h1>Incidence Response Check List</h1>
          <form className = 'container-fluid'>
            <div className='row'>
              <Input 
                title = 'Date'
                type = 'date' 
                name= 'date' 
                onChange = {this.changeHandler} 
                value = {this.state.formFields.date}
              />
              <Input
                title = 'Incident Title'
                type = 'text'
                name = 'incident_title'
                placeholder = 'Title'
                value = {this.state.formFields.incident_title }
                onChange = {this.changeHandler} 
              />
            </div>
            <label className = 'form-group-label font-weight-bold'>Who reported this incident?</label>
            <div className = 'row'>
              <Input
                type = 'text'
                name = 'incident_owner'
                placeholder = 'Name'
                value = {this.state.formFields.incident_owner}
                onChange =  {this.changeHandler}
              /> 
              <Input
                type = 'email'
                name = 'owner_email'
                placeholder = 'Email'
                value = {this.state.formFields.owner_email}
                onChange =  {this.changeHandler}
                />
                <Input
                type = 'tel'
                name = 'owner_tel'
                placeholder = '(123)435-6789'
                value = {this.state.formFields.owner_tel}
                onChange =  {this.changeHandler}
                />
                <Input
                type = 'text'
                name = 'owner_add'
                placeholder = 'Address'
                value = {this.state.formFields.owner_add}
                onChange =  {this.changeHandler}
                />
              </div>
              <div className='row'>
                <TextArea
                  title = 'Incident description'
                  type = 'text'
                  name = 'incident_desc'
                  rows = '5'
                  cols = '60'
                  value = {this.state.formFields.incident_desc}
                  onChange = {this.changeHandler}
                />
              </div>
              <label className = 'form-group-label font-weight-bold'>Incident type: </label>
              <div className='row'>
                <Checkbox 
                  title = 'IT Security Breach'
                  type = 'radio'
                  name = 'incident_type'
                  value = 'securityBreach_IT'
                  onClick = {this.changeHandler}
                />
                <Checkbox 
                  title = 'Breaches of Data'
                  type = 'radio'
                  name = 'incident_type'
                  value = 'dataBreach'
                  onClick = {this.changeHandler}
                />
                <Checkbox 
                  title = 'Physical Seurity Breach'
                  type = 'radio'
                  name = 'incident_type'
                  value = 'securityBreach_P'
                  onClick = {this.changeHandler}
                />
                 <Checkbox 
                  title = 'Equipment Compromised'
                  type = 'radio'
                  name = 'incident_type'
                  value = 'equipment'
                  onClick = {this.changeHandler}
                />
                <div className = 'row'></div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

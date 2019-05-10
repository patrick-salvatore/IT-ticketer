import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';

import Input from './Input'
import TextArea from './TextArea' 
import CheckboxList from './Checklist.js/CheckboxList'

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
        incident_type: [],
        incident_severity: '', 

      }
    }
  }

  onSelect = (e) => {
    let value = e.target.checked
    let name = e.target.value
    let formFields = {...this.state.formFields, incident_type: [name]}

    if (value) {
      this.setState(() => ( 
        {formFields}
      ), () => console.log(this.state))
    }
    else {
      let selectedValues = [this.state.formFields.incident_type]
      const index = selectedValues.indexOf(name);
        if(index > -1) {
            selectedValues = [...selectedValues.slice(0, index), ...selectedValues.slice(index + 1)];
        }
      console.log(selectedValues)
    }
  }

  changeHandler = (e) => {
    let value = e.target === 'radio' ? e.target.radio : e.target.value
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
                <CheckboxList onClick = {this.onSelect}/>
              </div>
              <label className = 'form-group-label font-weight-bold'> Incident Severity </label>
              <div className = 'row'> 
                <Input
                  title = 'Low'
                  type = 'radio'
                  name = 'incident_severity'
                  value = 'low'
                  onChange =  {this.changeHandler}
                  />
                  <Input
                  title = 'Mid'
                  type = 'radio'
                  name = 'incident_severity'
                  value = 'medium'
                  onChange =  {this.changeHandler}
                  />
                  <Input
                  title = 'High'
                  type = 'radio'
                  name = 'incident_severity'
                  value = 'high'
                  onChange =  {this.changeHandler}
                  />
              </div>
          </form>
        </div>
      </div>
    )
  }
}

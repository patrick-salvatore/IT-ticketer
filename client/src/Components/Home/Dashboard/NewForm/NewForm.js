import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';

import Input from './Input'
import Textarea from './TextArea'
import Checkbox from './Checkbox'

export default class NewForm extends Component {
  constructor() {
    super() 
    this.state = {
      validated: false,
      formFields: {
        date: '',
        incident_title: '', 
        incident_owner: '',
      }
    }
  }

  changeHandler = (e) => {
    let value = e.target.type === 'checkbox' ? e.target.check : e.target.value
    let name = e.target.name
    let formFields = {...this.state.formFields, [name]: value}
    // e.persist()
    this.setState(() => (
      {formFields}
    ), () => console.log(this.state))
    
  }

  render() {
    return (
      <div>
        <Navbar/>
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
          <div className = 'row'>
          <label className = 'form-group-label'>Who reported this incident?</label>
            <Input
              type = 'text'
              name = 'incident_owner'
              placeholder = 'Name'
              value = {this.state.formFields.incident_owner}
              onChange =  {this.changeHandler}
            /> 
          </div>
        </form>
      </div>
    )
  }
}

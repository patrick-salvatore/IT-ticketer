import React, { Component } from 'react'

// Router & Redux
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {saveFormToState} from '../../../Actions/ReportActions'

// components
import Input from '../Items/Input'
import TextArea from '../Items/TextArea' 
import CheckboxList from '../Items/Checklist.js/CheckboxList'

// new form container the handled the state interpulation and makes API calls
class NewForm extends Component {
  constructor() {
    super() 
    this.state = {
      validated: false,
      formFields: {
        date: '',
        incident_title: '', 
        author: '',
        owner_name: '',
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
    const value = e.target.checked
    const name = e.target.value

    if (value) {
      let selected = [...this.state.formFields.incident_type, name]
      let formFields = {...this.state.formFields, incident_type: [...selected]}
      this.setState(() => ( 
        {formFields}
      ))
    }
    else {
      let selectedValues = [...this.state.formFields.incident_type]
      selectedValues = selectedValues.filter(el => (
          el !== name
      ))
      let formFields = {...this.state.formFields, incident_type: [...selectedValues]}
      this.setState(() => ( 
          {formFields}
        ))
      }
  }

  changeHandler = (e) => {
    const value = e.target === 'radio' ? e.target.radio : e.target.value
    const name = e.target.name
    const formFields = {...this.state.formFields, [name]: value}
    this.setState(() => ( 
      {formFields}
    ))
  }

  saveHandler = (e) => {
    this.props.onSave(this.state.formFields)
  }

  render() {
    return (
      <div className = 'container'>
        <h1>Incidence Response Check List</h1>
          <form className = 'formContainer'>
            <div className='col-12'>
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
                <Input
                  title = 'Associates'
                  type = 'text'
                  name = 'author'
                  placeholder = 'Name'
                  value = {this.state.formFields.author }
                  onChange = {this.changeHandler} 
                />
              </div>
            </div>
            <div className = 'row'>
              <div className = 'col-4'>
                <label className = 'form-group-label font-weight-bold'>Who reported this incident?</label>
                <Input
                  type = 'text'
                  name = 'owner_name'
                  placeholder = 'Name'
                  value = {this.state.formFields.owner_name}
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
              <div className='row'>
                <div className ='col'>
                  <label className = 'form-group-label font-weight-bold'>Incident type: </label>
                  <CheckboxList onClick = {this.onSelect}/>
                </div>
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
            <Link to ='/questionnaire'><button onClick = {this.saveHandler} className = 'btn btn-primary'> Next </button></Link>
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSave: form => {
      dispatch(saveFormToState(form))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewForm)
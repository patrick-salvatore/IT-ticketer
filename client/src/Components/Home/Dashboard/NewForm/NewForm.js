import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';

import Input from './Input'
import TextArea from './TextArea' 
import Checkbox from './Checklist.js/Checkbox'
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

      }
    }
  }

  // onSelect = (selected, checked) =>  {
  //   //change props only for the clicked checkbox and update state
  //   if(checked) {
  //       //if the checkbox is check append id to the selected state array
  //       this.setState((prevState) => ({
  //            selectedValues: prevState.formFields.incident_type.concat(selected)
  //       }))
  //   } else {
  //       //remove the value from state is its unchecked
  //       let selectedValues = [...this.state.formFields.incident_type];
  //       const index = selectedValues.indexOf(selected);
  //       if(index > -1) {
  //           selectedValues = [...selectedValues.slice(0, index), ...selectedValues.slice(index + 1)];
  //       }
  //       this.setState({selectedValues});
  //   }
  //  }
  onSelect = (e) => {
    let value = e.target.checked
    let name = e.target.value
    let formFields = {...this.state.formFields, incident_type: {[name]: value}}
    this.setState(() => ( 
      {formFields}
    ), () => console.log(this.state))
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
        
                <CheckboxList onClick = {this.onSelect}/>
              
                <div className = 'row'></div>
              </div>
          </form>
        </div>
      </div>
    )
  }
}

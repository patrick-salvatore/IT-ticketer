import React, { Component } from 'react'
import Navbar from '../../Navbar/Navbar';

import Input from './Input'

export default class NewForm extends Component {
  constructor() {
    super() 
    this.state = {
      validated: false
    }
  }

  render() {
    const { validated } = this.state;
    return (
      <div>
        <Navbar/>
        <h1>Incidence Response Check List</h1>
        <form className = 'container-fluid'>
         <Input type = 'date' name= 'date' placeholder = 'date' />
        </form>
      </div>
    )
  }
}

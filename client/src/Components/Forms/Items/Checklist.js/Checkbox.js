import React from 'react'

const Checkbox = props => {
  return (
    <div className = 'form-group' style={{margin:'15px'}}>
      <input
        className = 'form-check-input'
        type = {props.type}
        name = {props.name}
        value = {props.value}
        placeholder ={props.placeholder}
        {...props}
      />
      <label forhtml = {props.name} className = 'form-check form-check-inline'> {props.title} </label>
   </div>
  )
}

export default Checkbox
import React from 'react'

const Input = props => {
  

  return (
    <div className = 'form-group'>
     <label forhtml = {props.name} className = 'form-label font-weight-bold'> {props.title} </label>
      <input 
        className = 'form-control'
        type = {props.type}
        name = {props.name}
        value = {props.value}
        placeholder ={props.placeholder}
        {...props}
      />
    </div>
  )
}

export default Input;
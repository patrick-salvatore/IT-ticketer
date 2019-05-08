import React from 'react'

const Input = props => {
  return (
    <div className = 'form-group'>
     <label for = {props.name} className = 'form-label'> {props.title} </label>
     <input className = 'form-control'
            type = {props.inputType}
            name = {props.name}
            value = {props.value}
            placeholder ={props.placeholder}
            {...props}
     />
    </div>
  )
}

export default Input;
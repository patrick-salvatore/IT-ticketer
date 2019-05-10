import React from 'react'

const Checkbox = props => {
  return (
    <div className="form-check form-check-inline">
        <label forhtml = {props.name} className = 'form-check-label'> {props.title} </label>
        <input 
            className = 'form-check-input'
            type = {props.type}
            name = {props.name}
            value = {props.value}
            // checked = {props.checked}
            {...props}
        >
        </input>
    </div>
  )
}

export default Checkbox
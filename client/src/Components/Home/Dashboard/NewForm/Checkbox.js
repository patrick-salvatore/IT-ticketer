import React from 'react'

const Checkbox = props => {
  return (
    <div class="form-check form-check-inline">
        <label forhtml = {props.name} className = 'form-check-label'> {props.title} </label>
        <input 
            className = 'form-check-input'
            type = 'checkbox'
            name = {props.name}
            value = {props.value}
        >   
            {props.name}
        </input>
    </div>
  )
}

export default Checkbox
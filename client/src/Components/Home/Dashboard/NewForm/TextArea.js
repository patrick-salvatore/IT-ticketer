import React from 'react'

const TextArea = props => {
  return (
    <div className = 'form-group'>
      <label forhtml = {props.name} className = 'form-label'> {props.title} </label>
      <textarea
        name = {props.name}
        value = {props.value}
        placeholder = {props.placeholder}
        rows = {props.row}
        maxLength = '250'
        spellCheck = 'true'
      />
    </div>
  )
}

export default TextArea;
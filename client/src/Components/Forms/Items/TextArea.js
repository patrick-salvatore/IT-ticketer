import React from 'react'


const TextArea = props => {
  return (
    <div className = 'form-group'>
      <label forhtml = {props.name} className = 'form-label font-weight-bold'> {props.title} </label>
      <textarea
        className = 'form-control'
        name = {props.name}
        value = {props.value}
        placeholder = {props.placeholder}
        rows = {props.rows}
        cols = {props.cols}
        maxLength = '300'
        spellCheck = 'true'
        {...props}
      />
    </div>
  )
}

export default TextArea;
import React from 'react'

const Checkbox = props => {
  return (
    <div className = 'form-group'>
    <label forhtml = {props.name} className = 'form-check form-check-inline font-weight-bold'> {props.title} </label>
     <input 
       className = 'form-check-input'
       type = {props.type}
       name = {props.name}
       value = {props.value}
       placeholder ={props.placeholder}
       {...props}
     />
   </div>
  )
}

export default Checkbox
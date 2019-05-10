import React from 'react'
import checkBoxes from './checkboxes'
import Checkbox from './Checkbox';

const CheckboxList = props => {
  return (
    <div>
        {checkBoxes.map((el, i) => {
           return (
            // <label forhtml = {el.name} className = 'form-check form-check-inline font-weight-bold'> {props.title} </label>
            <Checkbox 
                className = 'form-check-input'
                key = {i}
                title = {el.title}
                type = 'checkbox'
                name = {el.name}
                value = {el.key}
                {...props}
            />)
        })}
    </div>
  )
}

export default CheckboxList
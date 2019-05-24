import React from 'react'
import checkBoxes from './checkboxes'
import Checkbox from './Checkbox';

const CheckboxList = props => {
  return (
    <div className = 'row'>
        {checkBoxes.map((el, i) => {
           return (
            <Checkbox 
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
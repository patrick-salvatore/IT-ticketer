import React from 'react'
import './ErrorMessage.css'

const ErrorMessage = () => {
   return (
    <div className = 'notification'>
        <div className = 'message'>
            <div className = 'icon'> &#x26A0; </div> 
            <div className = 'error'> opps! No Reports found. Try Again</div>
        </div>
    </div>
   )
}

export default ErrorMessage
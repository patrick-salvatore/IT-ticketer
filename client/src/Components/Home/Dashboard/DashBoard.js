import React from 'react'
import {Link} from 'react-router-dom';

import Reports from './Reports/Reports'
import Search from './Search/Search'


const DashBoard = () => {
  return (
    <div className='container'>
        <h2>Search View</h2> 
        <Search/>
        <Reports/>
        <Link to="/newform"><button className = 'btn btn-primary' style ={{marginTop: '20px'}}>New Form</button></Link>
    </div>
  )
}

export default DashBoard;

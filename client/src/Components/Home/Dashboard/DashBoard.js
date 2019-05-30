import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import Reports from './Reports/Reports'
import Search from './Search/Search'

class DashBoard extends Component {
  constructor() {
    super()
    this.state = {
      searchData: {}
    }
  }


  handleSearch = (searchData) => {
    this.setState(({searchData}))
  }

  render() {
    return (
      <div className='container'>
          <h2>Search View</h2> 
          <Search onSearch = {this.handleSearch}/>
          <Reports/>
          <Link to="/newform"><button className = 'btn btn-primary' style ={{marginTop: '20px'}}>New Form</button></Link>
      </div>
    )
  }
}

export default DashBoard;

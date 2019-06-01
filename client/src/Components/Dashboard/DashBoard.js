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
          <div style = {{display: 'flex'}}>
            <Search onSearch = {this.handleSearch}/>
            <Link to="/newform" style = {{marginLeft: '1em'}}><button className = 'btn btn-primary'>New Form</button></Link>
          </div>
          <Reports Reports = {this.state.searchData}/>
      </div>
    )
  }
}

export default DashBoard;

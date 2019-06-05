import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import Reports from './Reports/Reports'
import Search from './Search/Search'
import ErrorMessage from '../Errors/ErrorMessage'

class DashBoard extends Component {
  constructor() {
    super()
    this.state = {
      reportData: {}
    }
  }

  handleSearch = (reportData) => {
    this.setState(({reportData}))
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:4000/API/reports', {})
    const data = await res.json()
    this.setState(({reportData: data.reports}))
  }  

  getId = () => {
    const id = Math.random(100);
    return id;
  };
  
  render() {
    return (
      <div className='container'> 
        <h2>Search View</h2>
        <div style = {{display: 'flex'}}>
          <Search onSearch = {this.handleSearch}/>
          <Link to="/newform" style = {{marginLeft: '1em'}}><button className = 'btn btn-primary'>New Form</button></Link>
        </div> 
        { this.state.reportData ? <Reports Reports = {this.state.reportData}/> : <ErrorMessage key={this.getId()}/> }
      </div>  
    )
  }
}

export default DashBoard;

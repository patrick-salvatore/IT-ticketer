import React from 'react'

import Table from 'react-bootstrap/Table';

import Content from "./Content"
/* for now, this will be the mock up. However need to map with the appropiate data when the time comes*/

const Reports = (props) => {
  return (
    <div>
      <Table bordered hover striped variant='primary' style ={{marginTop: '1em'}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Content Reports = {props.Reports}/>
        </tbody>
      </Table> 
    </div>
  )
}


export default Reports;
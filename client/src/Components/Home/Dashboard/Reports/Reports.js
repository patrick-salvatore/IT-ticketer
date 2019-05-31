import React from 'react'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


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
          </tr>
        </thead>
        <tbody>
          <Content Reports = {props.Reports}/>
        </tbody>
      </Table> 
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant = 'primary'>1</Button>
          <Button variant = 'primary'>2</Button>
          <Button variant = 'primary'>3</Button>
          <Button variant = 'primary'>4</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )
}


export default Reports;
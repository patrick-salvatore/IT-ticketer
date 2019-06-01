import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

/* here we will render the dynamic data from the DB through props from the state */

const Content = (props) => {
  const reports = props.Reports
  return (
    <Fragment>
      {reports.length > 0 && ((reports.map((r, i) => (
        <Fragment key = {i}>
          <tr> 
            <td>{r.ID}</td>
            <td>{r.title}</td>
            <td>{r.createdAt}</td>
            <td>{r.description}</td>
          </tr>
          <Link to = {{pathname: `/report/${r.ID}`, state: {report: reports[r.ID]}}}>
            view
          </Link>
        </Fragment>
      ))))}
    </Fragment>
  )
}

export default Content;
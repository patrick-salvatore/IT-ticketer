import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

/* here we will render the dynamic data from the DB through props from the state */

const Content = (props) => {
  const reports = props.Reports
  return (
    <Fragment>
      {reports.length > 0 && ((reports.map((report, i) => (
        <Fragment key = {report.ID}>
          <tr> 
            <td>{report.ID}</td>
            <td>{report.title}</td>
            <td>{report.createdAt}</td>
            <td>{report.description}</td>
          </tr>
          <Link to = {{pathname: `/report/${report.ID}`, state: {report: reports[i]}}}>
            view
          </Link>
        </Fragment>
      ))))}
    </Fragment>
  )
}

export default Content;
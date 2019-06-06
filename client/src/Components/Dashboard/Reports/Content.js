import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../../App/App.css'
/* here we will render the dynamic data from the DB through props from the state */

const Content = (props) => {
  const reports = props.Reports
  return (
    <Fragment>
      {reports.length > 0 && ((reports.map((report, i) => (
        <Fragment key = {report.ID}>
          <tr className = 'tableRow'> 
            <td>{report.ID}</td>
            <td>{report.title}</td>
            <td>{report.date}</td>
            <td>{report.description}</td>
            <td>
              <Link className= 'viewBtn' to = {{pathname: `/report/${report.ID}`, state: {report: reports[i]}}}>
                view
              </Link>
            </td>
          </tr>
        </Fragment>
      ))))}
    </Fragment>
  )
}

export default Content;
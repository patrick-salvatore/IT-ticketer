import React, {Fragment} from 'react'

/* here we will render the dynamic data from the DB through props from the state */

const Content = (props) => {
  const reports = props.Reports
  return (
    <Fragment>
      {reports.length > 0 && ((reports.map((r, i) => (
        <tr key = {i}>
          <td>{r.ID}</td>
          <td>{r.title}</td>
          <td>{r.createdAt}</td>
          <td>{r.description}</td>
        </tr>
      ))))}
    </Fragment>
  )
}

export default Content;
import React, {Fragment} from 'react'

/* here we will render the dynamic data from the DB through props from the state */

const Content = (props) => {
  return (
    <Fragment>
      <tbody>
        <tr>
          <td>1</td>
          <td>HealthStar</td>
          <td>01/03/19</td>
          <td>Printer server went down</td>
        </tr>
        <tr>
          <td>1</td>
          <td>HealthStar</td>
          <td>01/03/19</td>
          <td>Printer server went down</td>
        </tr>
        </tbody>
    </Fragment>
  )
}

export default Content;
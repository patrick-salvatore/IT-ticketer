import React, { Component } from 'react'
import './auth.css'
import Card from 'react-bootstrap/Card'


export default class SignIn extends Component {
  render() {
    return (
      <div className = 'formWrapper'>
        <Card className = 'signInForm'>
          <Card.Header>Sign In Here</Card.Header>
          <Card.Body>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name= 'email' aria-describedby="emailHelp" placeholder="Enter email" onChange= {e => this.inputChangeHandler(e)}></input>
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name = 'password' placeholder="Password" onChange= {e => this.inputChangeHandler(e)}></input>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
          </Card.Body>
        </Card>
      </div>
    )
  }
}

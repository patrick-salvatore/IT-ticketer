import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Navbar from "../Navbar/Navbar";
import DashBoard from '../Dashboard/DashBoard';
import SignIn from '../Auth/SignIn';
import Report from '../Dashboard/Reports/Report'
import NewForm from '../Forms/Containers/NewForm'
import Questionnaire from '../Forms/Containers/Questionnaire'
import Summary from '../Forms/Containers/Summary'
import Edit from '../Forms/Containers/Edit'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component = {DashBoard}></Route>
        <Route path='/report/:id' component = {Report}></Route>        
        <Route exact path='/edit' component = {Edit}></Route>
        <Route exact path='/signin' component = {SignIn}></Route>
        <Route exact path='/newform' component = {NewForm}></Route>
        <Route exact path='/questionnaire' component = {Questionnaire}></Route>
        <Route exact path='/summary' component = {Summary}></Route>
      </Switch>
    </div>
  );
}

export default App;

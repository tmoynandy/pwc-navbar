import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faEye, faListAlt, faChartBar, faTools } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="icon-bar">
          <a class="active" href="#"><FontAwesomeIcon icon={faHome}/><p className = "nav-text">Home</p></a>  
          <a href="#"><FontAwesomeIcon icon= {faEye} /> <p className = "nav-text">View</p></a> 
          <a href="#"><FontAwesomeIcon icon= {faListAlt} /> <p className = "nav-text">User Assignment</p></a>
          <a href="#"><FontAwesomeIcon icon= {faChartBar} /> <p className = "nav-text">Reports</p></a>
          <a href="#"><FontAwesomeIcon icon= {faTools} /> <p className = "nav-text">Settings</p></a> 
        </div>
      </React.Fragment>
    )
  }
}

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faEye, faListAlt, faChartBar, faTools, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './style.css'

export default class Navbar extends Component {
  state = {
    showSidebar : true,
  }

  toggleSidebar = ()=>{
    this.setState({showSidebar : !this.state.showSidebar})
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <nav class="navbar navbar-light bg-light">
              <button class="navbar-brand mb-0 h1 btn btn-primary btn-lg" onClick={this.toggleSidebar}>
              
                
                <img className="img" src="https://i.imgur.com/HJiFroA.png" />
                
               
              </button>
         
            </nav>
          </div>
        </div>
        {this.state.showSidebar === true? (
           <div className="row">
          <div className="col">
            <div className="icon-bar">
              <a href="#"><FontAwesomeIcon icon={faHome} /><p className="nav-text">Home</p></a>
              <a href="#"><FontAwesomeIcon icon={faEye} /> <p className="nav-text">View</p></a>
              <a href="#"><FontAwesomeIcon icon={faListAlt} /> <p className="nav-text">User Assignment</p></a>
              <a href="#"><FontAwesomeIcon icon={faChartBar} /> <p className="nav-text">Reports</p></a>
              <a href="#"><FontAwesomeIcon icon={faTools} /> <p className="nav-text">Settings</p></a>
              <button className = "btn btn-primary" onClick={this.toggleSidebar}><FontAwesomeIcon icon={faEllipsisH} /></button>
            </div>
          </div>
        </div>
        ):null}
       

      </React.Fragment>
    )
  }
}

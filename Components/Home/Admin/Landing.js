import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
               <button className = "btn btn-success">Create Hierarchy</button>
              </div>
            </div>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
                This is some text within a card body.
              </div>
            </div>

          </div>
        </div>

        <br />

        <div className="row">
          <div className="col">

            <div class="card">
              <div class="card-body">
                This is some text within a card body.
            </div>
            </div>

          </div>
        </div>

        <br />

      </React.Fragment>
    )
  }
}
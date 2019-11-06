import React, { Component } from "react";
import "./works.css";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="workWhole">
        <div>
          <h4 id="workHeader">Works</h4>
        </div>

        <div id="listOfWorks">
          <div id="ABT">
            <h5 id="name">Aggie Bus Tracker</h5>
            <a href="https://https://github.com/pannyandrew" id="github">
              GitHub
            </a>
          </div>
          <div id="Jive">
            <h5 id="name">Jive</h5>
            <a href="https://https://github.com/pannyandrew" id="github">
              GitHub
            </a>
          </div>
          <div id="Upcoming">
            <h5 id="name">Upcoming</h5>
            <a href="https://https://github.com/pannyandrew" id="github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

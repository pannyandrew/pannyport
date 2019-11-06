import React, { Component } from "react";
import "./navbar.css";
import "./body.css";
import "./index.css";
import "./skills.css";
import "./works.css";
import "./contact.css";
import { Radar } from "react-chartjs-2";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import githubWhite from "/Users/pannyandrew/Documents/react-projects/pannyport/src/icons/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png";
import githubBlack from "/Users/pannyandrew/Documents/react-projects/pannyport/src/icons/GitHub-Mark/PNG/GitHub-Mark-64px.png";
import linkedin from "/Users/pannyandrew/Documents/react-projects/pannyport/src/icons/LinkedIn-Logos/LI-In-Bug.png";
import instagramIcon from "/Users/pannyandrew/Documents/react-projects/pannyport/src/icons/GlyphLogo_May2016_Onlinev2/glyph-logo_May2016.png";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonNorm: "#fd5e53",
      buttonNext: "translucent",
      data: {
        labels: [
          "Python",
          "C++",
          "React",
          "Data Structures and Algorithms",
          "Math",
          "Design"
        ],
        datasets: [
          {
            label: false,
            data: [3, 3, 2, 4, 4, 3],
            backgroundColor: [
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)"
            ],
            borderColor: [
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)"
            ],
            borderWidth: 1
          }
        ]
      }
    };
  }

  originalData = e => {
    this.setState({
      buttonNorm: "#fd5e53",
      buttonNext: "black",
      data: {
        labels: [
          "Python",
          "C++",
          "React",
          "Data Structures and Algorithms",
          "Math",
          "Design"
        ],
        datasets: [
          {
            label: false,
            data: [3, 3, 2, 4, 4, 3],
            backgroundColor: [
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)"
            ],
            borderColor: [
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)"
            ],
            borderWidth: 1
          }
        ]
      }
    });
  };

  updateData = e => {
    this.setState({
      buttonNorm: "black",
      buttonNext: "#fd5e53",
      data: {
        labels: [
          "Python",
          "C++",
          "React",
          "Data Structures and Algorithms",
          "Math",
          "Design"
        ],
        datasets: [
          {
            label: false,
            data: [4, 4, 3, 5, 5, 4],
            backgroundColor: [
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)",
              "rgba(253, 94, 83, .5)"
            ],
            borderColor: [
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)",
              "rgba(253, 94, 83, .1)"
            ],
            borderWidth: 1
          }
        ]
      }
    });
  };

  render() {
    return (
      <div id="wholeWebsite">
        <ul id="navbar">
          <li id="logo">
            <a href="index.html">∧rew</a>
          </li>
          <li id="contact">
            <Link
              activeClass="active"
              className="works"
              to="contactPart"
              spy={true}
              smooth={true}
              duration={500}>
              <a href="">Contact</a>
            </Link>
          </li>
          <li id="works">
            <Link
              activeClass="active"
              className="works"
              to="workHeader"
              spy={true}
              smooth={true}
              duration={500}>
              <a href="">Works</a>
            </Link>
          </li>
          <li id="skills">
            <Link
              activeClass="active"
              className="skills"
              to="chart"
              spy={true}
              smooth={true}
              duration={500}>
              <a href="">Skills</a>
            </Link>
          </li>
        </ul>

        <div id="bodyText">
          <h1>
            Hello, I'm <h2 id="coloredText">Andrew Pan</h2>, a freshman studying
            <h2 id="coloredText"> Computer Science</h2> at Texas A&M University.
            I am currently looking for an <hi id="coloredText">internship!</hi>
          </h1>
        </div>

        <div id="chart">
          <h4>Skillset</h4>
          <section className="omega">
            <button
              style={{ borderColor: this.state.buttonNorm }}
              className="btn btn-primary"
              id="now"
              onClick={this.originalData}>
              Current
            </button>
            <button
              style={{ borderColor: this.state.buttonNext }}
              className="btn btn-primary"
              id="nextSem"
              onClick={this.updateData}>
              Next Semester
            </button>
          </section>
          <Radar
            options={{
              responsive: true,
              legend: {
                display: false
              },
              scale: {
                ticks: {
                  max: 5,
                  min: 0,
                  stepSize: 1,
                  fontSize: 15,
                  fontFamily: "'Raleway'"
                },
                pointLabels: {
                  fontSize: 14
                }
              }
            }}
            data={this.state.data}
          />
        </div>

        <div>
          <h4 id="workHeader">Works</h4>
        </div>

        <div className="listOfWorks">
          <div id="ABT">
            <h5 id="name">Aggie Bus Tracker</h5>
            <a href="https://github.com/pannyandrew" id="github">
              GitHub
            </a>
          </div>
          <div id="Jive">
            <h5 id="name">Jive</h5>
            <a href="https://github.com/pannyandrew" id="github">
              GitHub
            </a>
          </div>
          <div id="Upcoming">
            <h5 id="name">Upcoming</h5>
            <a id="github2">GitHub</a>
          </div>
        </div>

        <div id="contactPart">
          <h7 id="connect">Connect With Me!</h7>
        </div>

        <div id="socials">
          <a href="https://github.com/pannyandrew" target="_blank">
            <img src={githubBlack} alt="" id="githubIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-pan-081376185/"
            target="_blank">
            <img src={linkedin} alt="" id="linkedin" />
          </a>
          <a href="https://www.instagram.com/pannyandreuu/" target="_blank">
            <img src={instagramIcon} alt="" id="instagramIcon" />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;

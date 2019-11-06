import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import "./skills.css";

class Chart extends Component {
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
    );
  }
}

export default Chart;

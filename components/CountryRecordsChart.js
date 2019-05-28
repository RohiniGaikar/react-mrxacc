import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import InputBox from './InputBox';

class CountryRecordsChart extends React.Component {
  state = {
    dataBar: {
      labels: ["US", "O", "No Country", "CA", "UK"],
      datasets: [
        {
          //label: "% of Votes",
          data: [49, 26, 4, 2, 1 ],
          backgroundColor: [
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            
          ],
          borderWidth: 0,
         /* borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]*/
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: false,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }


  render() {
    return (
      <MDBContainer>
        <h5 className="mt-5">Records Over Country</h5>
        <InputBox />
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default CountryRecordsChart;
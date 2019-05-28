import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import InputBox from './InputBox';

class RegionRecords extends React.Component {
  state = {
    dataBar: {
      labels: [ "O", "New York", "Illinois", "Massach..", "Pennsylv...", "Michigan",             "Ohio", "Minnesota", "North Ca..", "Wisconsin", "Virginia", "Oregon", 
                "Arizona", "Tennessee", "Indiana", "British C..", "Kentuchy", "Kansas",
                "Alabama", "Nevada", "Maine", "Vermont", "Rhode Isl..", "Alberta", "Idaho", "North Da..", "Hawaii", "New Mex..", "South Da..", "Alaska", 
                "Newfoundland", "Saskatchwan" ],
      datasets: [
        {
          //label: "% of Votes",
          data: [30,10,9,8,4,3,2,2,1,1,1,1,1,1,1,1,1,1,0.5,0.5,0.5,0.5],
          backgroundColor: [
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
            "rgba(0, 0,255,255)",
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
        <h5 className="mt-5">Records Over Region</h5>
        <InputBox />
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default RegionRecords;
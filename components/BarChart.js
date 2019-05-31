import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";

class BarChart extends React.Component {
  state = {
    dataBar: {
      labels: ["US", "O", "No Country", "CA", "UK"],
      datasets: [
        {
          //label: "% of Votes",
          data: [45, 25, 7, 3, 2 ],
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
      responsive: false,
      maintainAspectRatio: true,
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
        <MDBRow>
        <MDBCol md="10">
        <label>Switch Bar Graph</label>
        </MDBCol>
        <MDBCol md="2">
               <MDBIcon icon="sync-alt" />
        </MDBCol>
        </MDBRow>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} width={600} height={300}  />
        
       </MDBContainer>
      
    );
  }
}

export default BarChart;
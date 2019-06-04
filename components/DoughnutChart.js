import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import InputBox from './InputBox';

class DoughnutChart extends React.Component {
state = {
  dataDoughnut: {
    labels: ["ON", "QC", "BC", "AB", "PE", "MB", "NL"],
    datasets: [
      {
        data: [62.84, 15.49, 13.57, 5.16, 1.20,0.98, 0.40],
        backgroundColor: ["#1e88e5","#2196f3", "#42a5f5", "#64b5f6", "#90caf9", "#bbdefb", "#e3f2fd"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#ccff90",
          "#ff9100"
        ]
      }
    ]
  }
}

render() {
    return (
      <MDBContainer>
      
      <label className="mt-5">Top 10 Provinces</label>
        <InputBox />
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    
    );
  }
}

export default DoughnutChart;
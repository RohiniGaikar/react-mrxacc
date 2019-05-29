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
        backgroundColor: ["#448aff", "#448afb", "#448af8", "#448af5", "#448af3", "#448af0", "#448af0" ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#448afb",
          "#448afb"
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <h3 className="mt-5">Top 10 Provinces</h3>
      <InputBox />
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default DoughnutChart;
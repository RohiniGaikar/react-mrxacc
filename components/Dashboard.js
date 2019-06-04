import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import BarChart from './BarChart';
import DropdownPage from './DropdownPage';
import { Fragment} from 'react';
import componentQueries from 'react-component-queries';
import Measurement from './Measurement';
import CountryRecordsChart from './CountryRecordsChart';
import RegionRecords from './RegionRecords';
//import ContactTable from './ContactTable';
import BasicContactTable from './BasicContactTable';
import DoughnutChart from './DoughnutChart';
import AllProvinceTable from './AllProvinceTable';
import CanadaHeatMap from './CanadaHeatMap';

const Dashboard = () => {
  return (
    <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "0.5rem",
                marginBottom: "1.5rem"
              }}>
    
    <MDBContainer>
    <MDBRow>
    <MDBCol md="7">
          <BarChart />
    </MDBCol>
    <div style={{
                borderLeft: "1px solid #e0e0e0",
                marginTop: "1rem",
                marginBottom: "0rem",
                
              }}>
              </div>
    
    <MDBCol md="4">
        <DropdownPage />
        <Measurement />
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1.5rem",
               
              }} >
      </div>
    <MDBContainer>
    <MDBRow>
    <MDBCol md="6">
        <CountryRecordsChart />
    </MDBCol>
    <div style={{
                borderLeft: "1px solid #e0e0e0",
                marginTop: "1rem",
                marginBottom: "0rem",
                
              }}>
              </div>
    <MDBCol md="5">
        <RegionRecords />
    </MDBCol>
    </MDBRow>
    </MDBContainer>
     <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1.5rem",
               marginBottom: "1.5rem"
              }} />

    <MDBRow>
    <MDBContainer>
        <MDBCol md="12">
        <BasicContactTable />
        </MDBCol>
      </MDBContainer>
    </MDBRow>
   <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1.5rem",
                marginBottom: "0.0rem"
                
              }} />
    <MDBRow>
    <MDBCol md="7">
    <CanadaHeatMap /> 
    </MDBCol> 
    <div style={{
                borderLeft: "1px solid #e0e0e0",
                marginTop: "1rem",
                marginBottom: "0rem",
                
              }}>
              </div>
     <MDBCol md="4">
     <MDBRow>
        <DoughnutChart />
      </MDBRow>
      <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1.5rem",
                marginBottom: "0rem"
                        }} />
      <MDBRow>
      <AllProvinceTable />
      </MDBRow>

    </MDBCol>

    </MDBRow>
    <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginTop: "1rem",
                marginBottom: "0rem",
                
              }}>
              </div>


        
   </div>
   
      );
}
const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(Dashboard);

export default Dashboard;
/****
 *  <MDBCol md="6">   
        <DoughnutChart />
    </MDBCol>
 */
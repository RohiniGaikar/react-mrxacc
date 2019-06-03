import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import BarChart from './BarChart';
import DropdownPage from './DropdownPage';
import { Fragment} from 'react';
import Measurement from './Measurement';
import CountryRecordsChart from './CountryRecordsChart';
import RegionRecords from './RegionRecords';
import ContactTable from './ContactTable';
import DoughnutChart from './DoughnutChart';
import AllProvinceTable from './AllProvinceTable';

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
                marginBottom: "1rem",
                //marginLeft: "2rem"
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
               // marginBottom: "1.5rem"
              }} >
      </div>
    <MDBContainer>
    <MDBRow>
    <MDBCol md="6">
        <CountryRecordsChart />
    </MDBCol>
    <MDBCol md="6">
        <RegionRecords />
    </MDBCol>
    </MDBRow>
    </MDBContainer>
     <div style={{
                borderTop: "1px solid #e0e0e0",
                marginTop: "1.5rem",
               // marginBottom: "1.5rem"
              }} />

    <MDBContainer>
        <MDBRow>
    <MDBCol md="6">
        <ContactTable />
    </MDBCol>
    <MDBCol md="6">   
        <DoughnutChart />
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    // <AllProvinceTable />
        
   </div>
   
      );
}

export default Dashboard;
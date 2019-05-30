import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
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
    <div>
    <MDBContainer>
    <MDBRow>
    <MDBCol md="8">
          <BarChart />
    </MDBCol>
    <MDBCol md="4">
        <h5>Choose a Dimension:</h5>
        <DropdownPage />
        <Measurement />
    </MDBCol>
    </MDBRow>
    </MDBContainer>

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
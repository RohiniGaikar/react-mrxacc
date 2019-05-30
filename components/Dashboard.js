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
    <Fragment>
        <BarChart />
       
        <h5>Choose a Dimension:</h5>
        <DropdownPage />
        <Measurement />
        
      
  
    
       
        <CountryRecordsChart />
    
    
    
        <RegionRecords />
    
    
    
        <ContactTable />
        <DoughnutChart />
        <AllProvinceTable />
        
   </Fragment>
   
      );
}

export default Dashboard;
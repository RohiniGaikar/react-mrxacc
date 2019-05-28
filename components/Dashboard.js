import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn } from "mdbreact";
import BarChart from './BarChart';
import DropdownPage from './DropdownPage';
import Measurement from './Measurement';
import CountryRecordsChart from './CountryRecordsChart';
import RegionRecords from './RegionRecords';
import ContactTable from './ContactTable';

const Dashboard = () => {
  return (
    <div>
        <BarChart />
        <h5>Choose a Dimension:</h5>
        <DropdownPage />
        <Measurement />
        <CountryRecordsChart />
        <RegionRecords />
        <ContactTable />
    </div>
      );
}

export default Dashboard;
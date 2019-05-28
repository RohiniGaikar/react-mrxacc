import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn } from "mdbreact";
import BarChart from './BarChart';
import DropdownPage from './DropdownPage';
import Measurement from './Measurement';
import CountryRecordsChart from './CountryRecordsChart';

const Dashboard = () => {
  return (
    <div>
        <BarChart />
        <h5>Choose a Dimension:</h5>
        <DropdownPage />
        <Measurement />
        <CountryRecordsChart />
    </div>
      );
}

export default Dashboard;
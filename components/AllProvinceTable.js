import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const AllProvinceTable = props => {
const data = {
  columns: [
    {
      label: 'Country',
      field: 'country',
      sort: 'asc'
    },
    {
      label: 'Region Code',
      field: 'regioncode',
      sort: 'asc'
    },
    {
      label: 'Region',
      field: 'region',
      sort: 'asc'
    },
    {
      label: 'Records',
      field: 'records',
      sort: 'asc'
      }
  ],
  rows: [
    {
      'country': 'CA',
      'regioncode': 'ON',
      'region': 'Ontario',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'QC',
      'region': 'Quebec',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'BC',
      'region': 'British Columbia',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'AL',
      'region': 'Alberta',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'PEI',
      'region': 'PrinceEdward Island',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'MB',
      'region': 'Manitoba',
      'records': ' '
    },
    {
    'country': 'CA',
      'regioncode': 'NL',
      'region': 'Newfoundlans and Labrador',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'ON',
      'region': 'Ontario',
      'records': ' '
    },
    {
      'country': 'CA',
      'regioncode': 'ON',
      'region': 'Ontario',
      'records': ' '
    }
  ]
};

return (
    <MDBTable scrollY display="block">
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default AllProvinceTable;
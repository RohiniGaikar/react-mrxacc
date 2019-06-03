import React from 'react';
import { MDBDataTable } from 'mdbreact';

const ContactTable1 = () => {
  const data = {
    columns: [
      {
        label: 'Country',
        field: 'country',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Region Code',
        field: 'regioncode',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Region',
        field: 'region',
        sort: 'asc',
        width: 250
      },
      {
        label: 'City',
        field: 'city',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Account Name',
        field: 'accountname',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Area Code',
        field: 'areacode',
        sort: 'asc',
        width: 250
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 350
      },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 350
      },
      {
        label: 'Phone',
        field: 'phone',
        sort: 'asc',
        width: 350
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 250
      }

    ],
    rows: [
      {
        country: 'CA',
        regioncode: 'BC',
        region: 'British Columbia',
        city: 'New WestMinster',
        accountname: ' ',
        areacode: '604',
        email:'negareshtv@yahoo.com ',
        name: 'Alvi,Sam ',
        phone: '6046784795',
        title: ' '
      },
      {
        country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
        country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
        country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
        country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
         country: 'CA',
        regioncode: 'ON',
        region: 'Ontario',
        city: 'Toronto',
        accountname: ' ',
        areacode: '416',
        email:'brock@reduxmedia.com ',
        name: 'Bradley, Brock ',
        phone: '(416)367-4346',
        title: ' '
      },
      {
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: '48',
        date: '2010/03/11',
        salary: '$850'
      },
      {
        name: 'Shou Itou',
        position: 'Regional Marketing',
        office: 'Tokyo',
        age: '20',
        date: '2011/08/14',
        salary: '$163'
      },
      {
        name: 'Michelle House',
        position: 'Integration Specialist',
        office: 'Sidney',
        age: '37',
        date: '2011/06/02',
        salary: '$95'
      },
      {
        name: 'Suki Burks',
        position: 'Developer',
        office: 'London',
        age: '53',
        date: '2009/10/22',
        salary: '$114'
      },
      {
        name: 'Prescott Bartlett',
        position: 'Technical Author',
        office: 'London',
        age: '27',
        date: '2011/05/07',
        salary: '$145'
      },
      {
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        age: '22',
        date: '2008/10/26',
        salary: '$235'
      },
      {
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        age: '46',
        date: '2011/03/09',
        salary: '$324'
      },
      {
        name: 'Unity Butler',
        position: 'Marketing Designer',
        office: 'San Francisco',
        age: '47',
        date: '2009/12/09',
        salary: '$85'
      },
      {
        name: 'Howard Hatfield',
        position: 'Office Manager',
        office: 'San Francisco',
        age: '51',
        date: '2008/12/16',
        salary: '$164'
      },
      {
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        age: '41',
        date: '2010/02/12',
        salary: '$109'
      },
      {
        name: 'Vivian Harrell',
        position: 'Financial Controller',
        office: 'San Francisco',
        age: '62',
        date: '2009/02/14',
        salary: '$452'
      },
      {
        name: 'Timothy Mooney',
        position: 'Office Manager',
        office: 'London',
        age: '37',
        date: '2008/12/11',
        salary: '$136'
      },
      {
        name: 'Jackson Bradshaw',
        position: 'Director',
        office: 'New York',
        age: '65',
        date: '2008/09/26',
        salary: '$645'
      },
      {
        name: 'Olivia Liang',
        position: 'Support Engineer',
        office: 'Singapore',
        age: '64',
        date: '2011/02/03',
        salary: '$234'
      },
      {
        name: 'Bruno Nash',
        position: 'Software Engineer',
        office: 'London',
        age: '38',
        date: '2011/05/03',
        salary: '$163'
      },
      {
        name: 'Sakura Yamamoto',
        position: 'Support Engineer',
        office: 'Tokyo',
        age: '37',
        date: '2009/08/19',
        salary: '$139'
      },
      {
        name: 'Thor Walton',
        position: 'Developer',
        office: 'New York',
        age: '61',
        date: '2013/08/11',
        salary: '$98'
      },
      {
        name: 'Finn Camacho',
        position: 'Support Engineer',
        office: 'San Francisco',
        age: '47',
        date: '2009/07/07',
        salary: '$87'
      },
      {
        name: 'Serge Baldwin',
        position: 'Data Coordinator',
        office: 'Singapore',
        age: '64',
        date: '2012/04/09',
        salary: '$138'
      },
      {
        name: 'Zenaida Frank',
        position: 'Software Engineer',
        office: 'New York',
        age: '63',
        date: '2010/01/04',
        salary: '$125'
      },
      {
        name: 'Zorita Serrano',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '56',
        date: '2012/06/01',
        salary: '$115'
      },
      {
        name: 'Jennifer Acosta',
        position: 'Junior Javascript Developer',
        office: 'Edinburgh',
        age: '43',
        date: '2013/02/01',
        salary: '$75'
      },
      {
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        age: '46',
        date: '2011/12/06',
        salary: '$145'
      },
      {
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        age: '47',
        date: '2011/03/21',
        salary: '$356'
      },
      {
        name: 'Lael Greer',
        position: 'Systems Administrator',
        office: 'London',
        age: '21',
        date: '2009/02/27',
        salary: '$103'
      },
      {
        name: 'Jonas Alexander',
        position: 'Developer',
        office: 'San Francisco',
        age: '30',
        date: '2010/07/14',
        salary: '$86'
      },
      {
        name: 'Shad Decker',
        position: 'Regional Director',
        office: 'Edinburgh',
        age: '51',
        date: '2008/11/13',
        salary: '$183'
      },
      {
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        age: '29',
        date: '2011/06/27',
        salary: '$183'
      },
      {
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        date: '2011/01/25',
        salary: '$112'
      }
    ]
  };

  return (
    /*<MDBDataTable
      bordered
      hover
      data={data} width={600} height={300}
    />*/
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    
  );
}

export default ContactTable;
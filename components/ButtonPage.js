import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBBtn } from "mdbreact";

const ButtonPage = () => {
  return (
    <Fragment>
      <MDBBtn color="primary">Primary</MDBBtn>
      <MDBBtn>Default</MDBBtn>
      <MDBBtn color="secondary">Secondary</MDBBtn>
      <MDBBtn color="success">Success</MDBBtn>
      <MDBBtn color="info">Info</MDBBtn>
      <MDBBtn color="warning">Warning</MDBBtn>
      <MDBBtn color="danger">Danger</MDBBtn>
    </Fragment>
  );
}

export default ButtonPage;
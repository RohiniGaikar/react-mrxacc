import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
       <MDBDropdownItem>US</MDBDropdownItem>
        <MDBDropdownItem>O</MDBDropdownItem>
        <MDBDropdownItem>No Country</MDBDropdownItem>
        <MDBDropdownItem>CA</MDBDropdownItem>
        <MDBDropdownItem>UK</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;
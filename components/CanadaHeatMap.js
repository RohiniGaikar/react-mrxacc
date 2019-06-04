import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBContainer } from "mdbreact";
//import { Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
//import {MapsComponent } from '@syncfusion/ej2-react-maps';

const CanadaHeatMap = () => {
  return(
    <div class="card">

            <label className="mt-5">Canada Heat Map</label>
            
 
  <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap" />

  
  <div class="card-body">

    
    <h4 class="card-title"><a>Card title</a></h4>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
    <a href="#" class="btn btn-primary">Button</a>

  </div>

</div>
            
    
  );
}
export default CanadaHeatMap;
/*<MapsComponent id="element">
            <Inject services={[DataLabel, Legend, MapsTooltip]}/>
            </MapsComponent>*/
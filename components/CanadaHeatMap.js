import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBContainer } from "mdbreact";
//import { Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
//import {MapsComponent } from '@syncfusion/ej2-react-maps';
//import { world_map } from 'world-map.ts';

import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';

const CanadaHeatMap = () => {
  return(
    
            <label className="mt-5" style={{
              marginLeft:"50px"
            }}
            >Canada Heat Map</label>
            

            
    
  );
}
export default CanadaHeatMap;
/*<MapsComponent id="element">
            <Inject services={[DataLabel, Legend, MapsTooltip]}/>
            </MapsComponent>*/
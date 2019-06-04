import React, { Component } from 'react';
import { render } from 'react-dom';
import { MDBContainer } from "mdbreact";
import { Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
import {MapsComponent } from '@syncfusion/ej2-react-maps';
import { world_map } from 'world-map.ts';

import { MapsComponent, LayersDirective, LayerDirective, Inject } from '@syncfusion/ej2-react-maps';

const CanadaHeatMap = () => {
  return(
    <div>

            <label className="mt-5">Canada Heat Map</label>
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map}>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>
</div>
            
    
  );
}
export default CanadaHeatMap;
/*<MapsComponent id="element">
            <Inject services={[DataLabel, Legend, MapsTooltip]}/>
            </MapsComponent>*/
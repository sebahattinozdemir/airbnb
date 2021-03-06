import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewport] = useState({
          
        width:'100%',
        height:'100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom:11
      });

    return (
        <div>
            
            
            <ReactMapGL
                mapStyle='mapbox://styles/sebahattin/ckwtjazca2x9615nvrfyvcy0h'
                mapboxApiAccessToken={process.env.mapbox_key}
                {...viewport}
            >

            </ReactMapGL>
        </div>
    )
}

export default Map

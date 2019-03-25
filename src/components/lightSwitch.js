import React from 'react';
import '../scss/lightswitch.scss'
export default function LightSwitch(props) {
    // const [light, setLight] = useState([
    //   {
    //     on: false,
  
    //   }
    // ]);
    
    return (
        //need to put the onclick on the input as the label also fires off an onclick
        //can change later when getting rid of label and input
      <div  className="container --container-lightswitch" >
        <input onClick={props.click} type="checkbox" id="light-switch" />
        <label htmlFor="light-switch" id="light-switch-label">
          <div className="screw"></div>
          <div className="switch"></div>
          <div className="screw"></div>
        </label>
      </div>
    )
  }
  
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
      <div onClick={props.click} id={props.light ? "lights-on" : null} className="container --container-lightswitch" >
          <div className="screw"></div>
          <div className="switch"></div>
          <div className="screw"></div>
      </div>
    )
  }
  
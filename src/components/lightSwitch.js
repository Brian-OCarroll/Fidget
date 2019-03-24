import React from 'react';
export default function LightSwitch(props) {
    // const [light, setLight] = useState([
    //   {
    //     on: false,
  
    //   }
    // ]);
    
    return (
      <div onClick={props.click} className="light-switch-container" >
        <input type="checkbox" id="light-switch" />
        <label htmlFor="light-switch" id="light-switch-label">
          <div className="screw"></div>
          <div className="switch"></div>
          <div className="screw"></div>
        </label>
        <div id="background"></div>
      </div>
    )
  }
  
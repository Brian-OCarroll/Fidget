import React from 'react';
import '../scss/scroller.scss'
export default function Scroller(props) {
  //add on scroll property
  //add velocity
  
  return (
    <div className="container container--scroller" >
      <div className="cube-side">
        <div onClick={props.click} className="wheel">
          <div className="flex notches">
            <div className="notch --notch1"></div>
            <div className="notch --notch2"></div>
            <div className="notch --notch3"></div>
            <div className="notch --notch4"></div>
            <div className="notch --notch5"></div>
        
          </div>
        </div>

      </div>

    </div>
  )
}

import React from "react";
import KeyNum from "./keyNum";

import "./urna.css"
const Urna = () =>{
  return(
    <div className="backUrna">
      <div className="screenUrna"></div>
     <div className="keyUrna"><KeyNum/></div>
    </div>
  )
}

export default Urna;
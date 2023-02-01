import React from "react";
import KeyNum from "./keyNum";
import KeyNumCopy from "../Components/keyNumCopy";

import "./urna.css"
const Urna = () =>{
  return(
    <div className="backUrna">
      <input className="screenUrna" type="text" />
      <div className="keyUrna"><KeyNumCopy/></div>
    </div>
  )
}

export default Urna;
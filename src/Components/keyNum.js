import React from "react";

import "../Components/keyNum.css"


const KeyNum = () => {
  return (
    <div className="keys">
     
      <table class="table_teclado">
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr>
          
          <td colspan="1">0</td>
          
        </tr>
        <tr className="control">
          <td colspan="2">BRANCO</td>
          <td colspan="2">CORRIGE</td>
          <td colspan="2">CONFIRMA</td>
        </tr>
      </table>
    </div>
  )
}

export default KeyNum;
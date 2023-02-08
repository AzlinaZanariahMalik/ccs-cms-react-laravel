import * as React from 'react';
import { Link } from "react-router-dom";





import logo from '../assets/CCS_logo.png';
export default function Org() {

    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h1>Organizational Chart</h1>
        <Link className="btn-add" to="#">Assign</Link>
       
      </div>

     
       <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Dean</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Department Heads</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Faculty</h4>

        </div>   
        <div className="card animated fadeInDown">

        </div>
        <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Staff</h4>

        </div>   
        <div className="card animated fadeInDown">

        </div>
    
    </div>
    
    
    )
}
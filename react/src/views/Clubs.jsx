import * as React from 'react';
import { Link } from "react-router-dom";





import logo from '../assets/CCS_logo.png';
export default function Clubs() {

    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h1>College Club</h1>
        <Link className="btn-add" to="#">Add</Link>
       
      </div>

     
       <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Genders Club</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Venom Publication</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>

     

      
      
    
    </div>
    
    
    )
}
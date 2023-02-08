import * as React from 'react';
import { Link } from "react-router-dom";





import logo from '../assets/CCS_logo.png';
export default function News() {

    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h1>News</h1>
        <Link className="btn-add" to="#">Add</Link>
       
      </div>

     
       <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Announcement</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Activities</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>

      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Articles Display</h4>

        </div>   
        <div className="card animated fadeInDown">

        </div>

      
      
    
    </div>
    
    
    )
}
import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Stack from '@mui/material/Stack';
import { Button, CardActionArea, CardActions } from '@mui/material';
//icons

import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";




import logo from '../assets/CCS_logo.png';
export default function About() {
    const theme = useTheme();
    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h1>About</h1>
       
      </div>

      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Header</h4>

        </div> 
     
      <Stack direction="row" alignItems="center" gap={5}>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th> <Stack direction="row" alignItems="center" gap={1}>
                  Logo  
                </Stack>
            </th>
            <th> Name </th>
            <th><button className="btn-edit" ><EditIcon /></button></th>
            <th></th>
           
            
          </tr>
          </thead>
        
          
         
            <tbody>
           
              <tr>
              <td>
              <div className="card animated fadeInDown">
              <img src={logo} alt="logo" width="150" />
              </div>
                 </td>
                 <td>
                 College of Computing Studies
                 </td>
               
                <td>&nbsp;
                 </td>
               
                
               
              </tr>
           
            </tbody>
          
        </table>
      </div>

      
     
    </Stack>
       <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Introduction</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Vision/Mission</h4>
       
      </div>   
    <div className="card animated fadeInDown">
      
      </div>
    
    </div>
    
    )
}
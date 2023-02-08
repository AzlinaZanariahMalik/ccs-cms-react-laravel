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
import PendingIcon from '@mui/icons-material/Pending';
import CheckIcon from '@mui/icons-material/Check';
import RateReviewIcon from '@mui/icons-material/RateReview';

import { Link } from "react-router-dom";
export default function Dashboard() {
    const theme = useTheme();
    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h1>Dashboard</h1>
       
      </div>

      
     
      <Stack direction="row" alignItems="center" gap={5}>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th> <Stack direction="row" alignItems="center" gap={1}>
                  <PendingIcon style={{color:'#19786A'}}/> Pending Post  
                </Stack>
            </th>
            <th></th>
            <th></th>
            <th></th>
           
            
          </tr>
          </thead>
        
          
         
            <tbody>
           
              <tr>
                <td colSpan={3} alignItems="center"><h1>7</h1></td>
               
                <td>&nbsp;
                 </td>
               
                
               
              </tr>
           
            </tbody>
          
        </table>
      </div>

      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th><Stack direction="row" alignItems="center" gap={1}>
                  <CheckIcon  style={{color:'#19786A'}}/> Confirmed Post  
                </Stack></th>
            <th></th>
            <th></th>
            <th></th>
            
          </tr>
          </thead>
        
           
         
            <tbody>
           
              <tr>
              <td colSpan={3} alignItems="center"><h1>7</h1></td>
              
                <td>
                 
                  &nbsp;
                  
                </td>
              </tr>
           
            </tbody>
          
        </table>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th><Stack direction="row" alignItems="center" gap={1}>
                  <RateReviewIcon style={{color:'#19786A'}}/> Review Response  
                </Stack></th>
            <th></th>
            <th></th>
            <th></th>
            
          </tr>
          </thead>
        
           
         
            <tbody>
           
              <tr>
              <td colSpan={3} alignItems="center"><h1>7</h1></td>
                
                
                <td>
                 
                  &nbsp;
                  
                </td>
              </tr>
           
            </tbody>
          
        </table>
      </div>
     
    </Stack>
       <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>

        <h4>Feedbacks</h4>
       
      </div>   
    <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Submit Date</th>
            <th>Actions</th>
          </tr>
          </thead>
        
            <tbody>
            <tr>
              <td colSpan="5" className="text-center">
                Loading...
              </td>
            </tr>
            </tbody>
         
            <tbody>
           
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button className="btn-view" >View</button></td>
                
              </tr>
           
            </tbody>
          
        </table>
      </div>
    
    </div>
    )
}
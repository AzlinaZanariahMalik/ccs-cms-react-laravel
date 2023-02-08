import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
import logo from '../assets/CCS_logo.png';

import { ProSidebarProvider } from "react-pro-sidebar";
//icons
import WidgetsIcon from '@mui/icons-material/Widgets';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TitleIcon from '@mui/icons-material/Title';
import InfoIcon from '@mui/icons-material/Info';
import CampaignIcon from '@mui/icons-material/Campaign';
import SchoolIcon from '@mui/icons-material/School';
import SpokeIcon from '@mui/icons-material/Spoke';
import Groups2Icon from '@mui/icons-material/Groups2';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import Sidebar from "../Aside/Sidebar";


export default function DefaultLayout() {

    //use the state context that imports from context provider
    const {user, token, setUser, setToken}= useStateContext()

    //if token does not exist or if user is not login
    if(!token){
        return <Navigate to="/login" />

    }

    //for logout function
    const onLogout = (e) =>{
        e.preventDefault()
        //post request
        axiosClient.post('/logout')
        //whenever the logout happens
        .then(() => {
            //setUser to empty objects
            setUser({})
            //setToken to null to redirect the user to login page
            setToken(null)
        })
    }
    
    // to show the name of the user beside logout
    useEffect (() => {
       //get request on /user 
       axiosClient.get('/user')
       //get the response
       .then(({data}) => {
        //call the setUser and pass the data
        setUser(data)
       })
    })
    return(
        <div id="defaultLayout">

            <Sidebar />

         
         
            
           
           
            <div className="content">
                <header>
                    <div>
                        College of Computing Studies
                    </div>
                    <div>
                        {/* auth the user information*/}
                        {user.name}
                        <a href="#" onClick={onLogout} className="btn-logout"> Logout</a>
                    </div>
                </header>
                <main>
                    {/*need to render the login we have to use outlet auth, will be the place where the child roles be render */}
                    <Outlet />
                  
                </main>

            </div>
       
        </div>
    )
}
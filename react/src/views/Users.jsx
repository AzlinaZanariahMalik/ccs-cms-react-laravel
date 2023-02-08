import { useEffect, useState } from "react";

import { Link, Navigate, Outlet } from "react-router-dom";
import axiosClient from "../axios-client";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Users() {

    const [users, setUsers] = useState([]);
    //show loading text and show users are actually loading
    const [loading, setLoading ] = useState (false)
    const {setNotification} = useStateContext();
    //use useeffect and make request to get users on component didmount
    useEffect(() => {
        //should return all the users
        getUsers();
    }, [])
    //create getUser function
    const onDeleteClick = user => {
      if (!window.confirm("Are you sure you want to delete this user?")) {
        return
      }
      axiosClient.delete(`/users/${user.id}`)
        .then(() => {
          setNotification('User was successfully deleted')
          getUsers()
        })
    }
    const getUsers = () => {
        setLoading(true)
        //make request
        axiosClient.get('/users')
        //get the response
        .then(({data}) => {
            setLoading(false)
            //print the entire data
            console.log(data);
            //call setUsers
            setUsers(data.data);
        })
        .catch(() => {
            setLoading(false)
        })
    }
    return(
        <div>
      <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <h1>Users</h1>
        <Link className="btn-add" to="/users/new">Add new</Link>
      </div>
      <div className="card animated fadeInDown">
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Create Date</th>
            <th>Actions</th>
          </tr>
          </thead>
          {loading &&
            <tbody>
            <tr>
              <td colSpan="5" className="text-center">
                Loading...
              </td>
            </tr>
            </tbody>
          }
          {!loading &&
            <tbody>
              {/*iterate users*/}
              {users.map( u => (
           
            
           
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.created_at}</td>
                <td>
                  <Link className="btn-edit" to={'/users/'+u.id}>Edit</Link>
                  &nbsp;
                  <button onClick={e => onDeleteClick(u)} className="btn-delete" >Delete</button>
                </td>
              </tr>
           ))}
            </tbody>
}
        </table>
      </div>
    </div>
    )
}
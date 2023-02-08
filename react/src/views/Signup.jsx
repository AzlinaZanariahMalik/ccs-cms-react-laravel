import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";



export default function Signup() {
    //make request to the server
    const nameRef = useRef();
    const emailRef = useRef();
    const roleRef = useRef();
    const passwordRef = useRef();
    const passwordconfirmationRef = useRef();
    const [errors, setErrors] = useState(null);

    const {setUser, setToken} = useStateContext()
    //handles onSubmit function
    const onSubmit = (e) => {
        e.preventDefault()
        
        const payload = {
            //how laravel able to search the value or how we get the value from the backend 
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log(payload);
        axiosClient.post('/signup', payload)
        //successful response inside the data is the actual response
        .then(({data}) => {
            //the server will reutrn the user and token information
            setUser(data.user)
            setToken(data.token)

        })
        .catch(error => {
            //console.log(error);
            //take response from the error
            const response = error.response;
            if( response && response.status == 422) {
                setErrors(response.data.errors)
            }
        })
    }
    

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Signup</h1>
                    {/**if error exist */}
                    { errors && <div className="alert">
                        {Object.keys(errors).map(key => (
                           
                            <p key={key}>{errors[key][0]}</p>

                        ))}
                    </div>

                    }
                    <input ref= {nameRef}  placeholder="Full Name" />
                    <input ref= {emailRef} type="email" placeholder="Email Address" />
                    <select ref= {roleRef} id = "dropdown">
                    <option value="">Select Role</option>
                        <option value="1">Admin</option>
                        <option value="2">Faculty</option>
                        <option value="3">Staff</option>
                    </select>
                    <input ref= {passwordRef} type="password" placeholder="Password" />
                    <input ref= {passwordconfirmationRef} type="password" placeholder="Confirm Password" />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">Already Registered? <Link to="/login">Sign in</Link></p>


                </form>
            </div>
            
        </div>
    )
}
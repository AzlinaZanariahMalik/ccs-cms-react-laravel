import { Link } from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../context/ContextProvider";

export default function Login() {

    //make request to the server
    const emailRef = useRef();
    const passwordRef = useRef();
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
        //console.log(payload);
        //reset the errors

        setErrors(null)

        axiosClient.post('/login', payload)
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
                //if exists
                if(response.data.errors){
                    setErrors(response.data.errors)
                } else
                //the data message and set errors as an object
                setErrors({
                    email: [response.data.message]
                })
                
            }
        })
    } 
    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login</h1>
                    {/**if error exist */}
                    { errors && <div className="alert">
                        {Object.keys(errors).map(key => (
                           
                            <p key={key}>{errors[key][0]}</p>

                        ))}
                    </div>}
                    <input ref= {emailRef} type="email" placeholder="Email" />
                    <input ref= {passwordRef}  type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">Not Register? <Link to="/signup">Create an account</Link></p>


                </form>
            </div>
            
        </div>
    )
}
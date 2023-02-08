//detect which page to render and if user authorize or not
//state management to save user information authentication 
import { createContext, useContext, useState } from "react";

//default value
const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {}, //set to function 
    setToken: () => {}, //set to function
    setNotification: () => {}
})

export const ContextProvider = ({children}) =>{
    //actual state
    const [ user, setUser ] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    const setToken = (token) => {
        _setToken(token)

        //set the token in local storage or session storage
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }
    const setNotification = message => {
        _setNotification(message);
    
        setTimeout(() => {
          _setNotification('')
        }, 5000)
      }
    return(
        //inside the value {} is to pass out the object from react 
        //the additional {} inside is to pass the object right here (the user information)
        <StateContext.Provider value={{
            //provide the information
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification



        }}>
            {children}

        </StateContext.Provider>
    )
}

// a function which will simply return usecontext
export const useStateContext = () => useContext(StateContext)
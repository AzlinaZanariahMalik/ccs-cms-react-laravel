import axios from "axios";

const axiosClient = axios.create({
    //provide the api url of the backend localhost or server = environment file in react folder
    baseURL:  `${import.meta.env.VITE_API_BASE_URL}/api`
})
//telling the axios to use the following inteceptors
axiosClient.interceptors.request.use((config) => {

    const token = localStorage.getItem('ACCESS_TOKEN')

    //bearer access token
    config.headers.Authorization = `Bearer ${token}`

    return config;

})

// create the responive interceptors
axiosClient.interceptors.response.use((response) => {
    return response;

}, (error) =>{  //on rejected
    //take out the response coming from the server
    try{
        const {response} = error;
        if (response.status == 401 ){
            localStorage.removeItem('ACCESS_TOKEN')
        } 
    } catch(error){
        console.error;
    }
    

    throw error;
    
})
export default axiosClient;
import { useState, useEffect } from "react";
import axios from "axios";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        axios.get('https://whispering-ravine-18625.herokuapp.com/services')
        .then(res => setServices(res.data))
    } 
    
    ,)

     
        return {
            services,
            setServices
        };
}

export default useServices;
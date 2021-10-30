import { useState, useEffect } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then (data => setServices(data))
    } 
    
    ,)

     
        return {
            services,
            setServices
        };
}

export default useServices;
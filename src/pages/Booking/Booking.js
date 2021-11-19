import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from "axios";
import SharedBanner from '../../shared/SharedBanner/SharedBanner';
import { useForm, Controller } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const {user} = useAuth();

    const { register, handleSubmit, control, reset } = useForm();

//get single service 
    useEffect(() => {
        axios.get(`https://whispering-ravine-18625.herokuapp.com/services/${serviceId}`)
            .then(res => setService(res.data))
    }, [serviceId]);

    console.log("booking:" + serviceId);

// booking form submit handller
    const onSubmit = (data) => {
        data.service_name=service.title;
        data.service_id=service._id;
        axios.post('https://whispering-ravine-18625.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert('Booking successfull');
                    reset();
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <SharedBanner
                bannerText={service.title}
                url={service.image_url}
            />
            <main className="md:flex mt-10 px-10 md:px-20">
                {/* left */}
                <div className="text-left">
                    <h2 className="my-2 text-2xl font-bold">
                        {service.title}
                    </h2>
                    <p className="mb-5">
                        <span className="text-red-500">$ {service.price}</span> /per person
                    </p>
                    <p>
                        {service.description}
                    </p>

                </div>
                {/* right */}
                <div className="md:ml-5 ">
                    <h2 className="font-bold text-4xl mb-5 ">
                        BOOK NOW
                    </h2>
                    <form className="grid space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div><input className="py-2 px-4 border" placeholder="Name" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 50 })} /></div>
                        <div><input className="py-2 px-4 border" placeholder="E-mail" defaultValue={user.email} {...register("email",{ required: true,})}/></div>
                        <div><input className="py-2 px-4 border" placeholder="Phone" type="number" {...register("phone", { required: true, min: 10 })} /></div>
                        <div><input type="date" className="py-2 px-4 border inline-block w-full" placeholder="Date" {...register("date", { required: true })} /></div>
                        <div><input type="number" className="py-2 px-4 border" placeholder="Number of tickets" {...register("number_of_tickets", { required: true, pattern:/^[1-9]/ })} /></div>
                        <div><input type="textarea"className="inline-block h-16 py-2 px-4 border" placeholder="message" {...register("message", {  })} /></div>
                        <div>
                            <Controller
                            name="Add New Service"
                            control={control}
                            defaultValue={false}
                            render={({ field }) =><input className="py-2 px-4 border bg-gray-600 text-white rounded-lg" type="submit" value="CONFIRM BOOKING" />}
                        />
                        </div>

                     

                    </form>
                </div>
            </main>
        </div>
    );
};

export default Booking;
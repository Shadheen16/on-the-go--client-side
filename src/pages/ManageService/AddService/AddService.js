import React from 'react';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, control, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://whispering-ravine-18625.herokuapp.com/services',data)
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="mt-20 w-full">
        
            <form className="grid space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="py-2 px-4 border" placeholder="title" {...register("title", { required: true, maxLength: 50 })} />
                <input className="py-2 px-4 border" placeholder="decription" {...register("description", { required: true, maxLength: 500 })} />
                <input className="py-2 px-4 border " placeholder="price" type="number" {...register("price", { required: true })} />
                <input className="py-2 px-4 border" placeholder="image url" {...register("image_url", { required: true })} />
                <Controller
                    name="Add New Service"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => <input className="py-2 px-4 border bg-gray-600 text-white rounded-lg" type="submit" value="Add New Service" />}
                />

            </form>
        </div>
    );
};

export default AddService;
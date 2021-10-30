import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="mt-20">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 50})} />
                <input {...register("description", { required: true, maxLength: 500})} />
                <input type="number" {...register("price", {required:true  })} />
                <input {...register("image_url", { required:true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
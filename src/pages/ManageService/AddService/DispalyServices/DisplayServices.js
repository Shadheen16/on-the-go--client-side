import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';


const DisplayServices = (props) => {
    const { _id, title, description, price, image_url, about } = props.service;

    const { register, handleSubmit, control, reset } = useForm();

    const [toggle, setToggle] = useState(true);
    const toggleUpdate = async () => {
        console.log("toggle tiggered")
        if (toggle) {
            document.getElementById('modal').classList.remove("hidden");
            setToggle(false)
        } else if (!toggle) {
            document.getElementById('modal').classList.add("hidden");
            setToggle(true);
        }
    }

    const onSubmit = data => {
        console.log(data);
        axios.put('https://whispering-ravine-18625.herokuapp.com/services', data)
            .then(res => {
                console.log(res)
                window.confirm("Are you sure")
                if (res.status === 200) {
                    alert('Updated successfully');
                    reset();
                }
            })
    }

    const handleDelete = async (id) => {
        console.log(id)
        window.confirm("Are you sure");
        await axios.delete(`https://whispering-ravine-18625.herokuapp.com/services/${id}`)
        .then(res => {
            if(res.status===200) {
                alert("Deleted Successfully")
            }
        })

    }

    return (
        <div className="md:flex  bg-gray-50 py-3 px-4  space-x-2 mb-4 shadow-md sm:space-x-2">
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-4 devide-y-2 devide-solid devide-gray-500 ">
                <img className="h-md w-md" src={image_url} alt="" />
                <p1>Title: {title}</p1>
                <p1>Description: {description || about}</p1>
                <p1>Price: {price}</p1>
            </div>
            <div className="border-l-2 border-dashed px-4 space-x-3 md:space-x-0 my-auto space-y-3 ">
                <button className="h-6 w-6 p-1 rounded full bg-red-500 text-white"><TrashIcon onClick={() => handleDelete(_id)}></TrashIcon></button>
                <button className="h-6 w-6 p-1 rounded full bg-gray-600 text-white"><PencilIcon onClick={toggleUpdate}></PencilIcon></button>
                <button className="h-6 w-6 p-1 rounded full bg-green-500 text-white"></button>
            </div>

            {/* Update modal */}
            <div
                id="modal"
                className="hidden overflow-x-hidden  overflow-y-auto fixed inset-0 top-16  z-50 outline-none focus:outline-none justify-center items-center transform transition-all duration-500 ease-out"

            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* <!--content--> */}
                    <div
                        className="
        border-0
        rounded-lg
        shadow-lg
        relative
        flex flex-col
        w-full
        bg-white
        outline-none
        focus:outline-none
      "
                    >
                        {/* <!--header--> */}
                        <div
                            className="
          flex
          items-start
          justify-between
          p-5
          border-b border-solid border-gray-200
          rounded-t
        "
                        >
                            <h3 className="text-3xl font-semibold">Update Service</h3>
                            <button
                                className="
            p-1
            ml-auto
            bg-transparent
            border-0
            text-gray-300
            float-right
            text-3xl
            leading-none
            font-semibold
            outline-none
            focus:outline-none
          "
                                onClick={toggleUpdate}
                            >
                                <span
                                    className="
              bg-transparent
              h-6
              w-6
              text-2xl
              block
              outline-none
              focus:outline-none
            "
                                >
                                    <i className="fas fa-times"></i>
                                </span>
                            </button>
                        </div>
                        {/* <!--body--> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="relative p-6 flex-auto">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div className="grid space-y-4 max-w-lg mx-auto">
                                        <input className="py-2 px-4 border" defaultValue={title} placeholder="title" {...register("title", { required: true, maxLength: 50 })} />
                                        <input className="py-2 px-4 border" defaultValue={description}  placeholder="decription" {...register("description", { required: true, maxLength: 500 })
            
                                        } />
                                        <input className="py-2 px-4 border" placeholder="price" defaultValue={price} type="number" {...register("price", { required: true, min: 10 })} />
                                        <input className="py-2 px-4 border" placeholder="image url"
                                        defaultValue={image_url}  {...register("image_url", { required: true })} />
                                    </div>



                                </div>
                            </div>
                            {/* <!--footer--> */}
                            <div
                                className="
          flex
          items-center
          justify-end
          p-6
          border-t border-solid border-gray-200
          rounded-b
        "
                            >
                                <button
                                    className="
            text-red-500
            background-transparent
            font-bold
            uppercase
            px-6
            py-2
            text-sm
            outline-none
            focus:outline-none
            mr-1
            mb-1
            ease-linear
            transition-all
            duration-150
          "
                                    type="button"
                                    onClick={toggleUpdate}
                                >
                                    Close
                                </button>
                                <Controller
                                    name="Add New Service"
                                    control={control}
                                    defaultValue={false}
                                    render={({ field }) => <input className="py-2 px-4 border bg-gray-600 text-white rounded-lg" type="submit" value="Save Changes" />}
                                />
                            
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div
                className="hidden opacity-25 fixed inset-0 z-40 bg-black"
                id="modal-example-regular-backdrop"
            ></div>
        </div>
    );
};

export default DisplayServices;
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import SharedBanner from '../../shared/SharedBanner/SharedBanner';

const Register = () => {
    const { signInUsingGoogle, handleInput, registerUser, logInUser, error } = useAuth();

    const [isLogin, setIsLogin] = useState('');

    const toggleLogin = (e) => {
        console.log(e.target.checked);
        setIsLogin(e.target.checked);
    };

    return (
        <div className="">
            <SharedBanner
                bannerText = "Create New Account"
            />
            <div className="w-content m-auto text-left max-w-lg px-10 shadow-lg py-5 mt-10 rounded-xl">
                <h1 className="w-full text-center text-2xl font-bold mb-5">
                {!isLogin ?`REGISTER NOW`: `PLEASE LOGIN`}
                </h1>
                <form onSubmit={isLogin ? logInUser : registerUser}>
                    <p className="mb-5">
                         {!isLogin && <label htmlFor="name" className="my-5">Name <input onBlur={handleInput} className="border border-gray-600 px-2 py-2 block w-full my-2" type="text" name="name" placeholder="name" /></label >}
                    </p>
                   
                    <p className="mb-5">
                        <label htmlFor="email" >Email<input className="border border-gray-600 px-2 py-2 block w-full my-2" type="text" name="email" placeholder="email" onBlur={handleInput} />
                        </label > 
                    </p>
                    <p>
                        <label htmlFor="password">Password <input className="border border-gray-600 px-2 px-2 py-2 block w-full my-2" type="password" name="password" placeholder="password" onBlur={handleInput} /> </label >
                    </p>
                    <label htmlFor="checkbox">
                        <input onChange={toggleLogin} type="checkbox" className="border-2 m-2" id="checkbox" />
                        Already Resgistered ?
                    </label>
                    {
                     error?.length && <p className="border-2 border-red-500 text-red-500  w-full p-2 m-auto my-2 text-center">{error}</p>
                    }
                    <button className="px-3 py-2 bg-gray-600 text-white hover:scale-105 transform transition-all duration-300 ease-out active:scale-95 rounded block w-full" type="submit" >{isLogin ? "Login" : "Register"}</button>
                    
                </form>
                <div className="flex-row text-center">
                <h1 className="text-gray-400 my-2">----------or----------</h1>
                <button className="rounded px-2 py-3 border-2 flex mx-auto hover:border-gray-600" onClick={signInUsingGoogle}><span className="inline-block text-red-300"><img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=""/></span><span className="my-auto ml-2">Sign in with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
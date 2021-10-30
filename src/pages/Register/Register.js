import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, handleInput, registerUser, logInUser, error } = useAuth();

    const [isLogin, setIsLogin] = useState('');

    const toggleLogin = (e) => {
        console.log(e.target.checked);
        setIsLogin(e.target.checked);
    };

    return (
        <div className="my-16 sm:max-w-md mx-auto shadow-2xl p-5 pb-8">
            <h1 className="text-2xl font-bold py-2">{isLogin ? " LOGIN" : "REGISTER"}</h1>
            <div className="w-content m-auto text-left">
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
                     error?.length && <p className="bg-yellow-300  w-full p-2 m-auto my-2 text-center">{error}</p>
                    }
                    <button className="px-3 py-2 bg-green-400 rounded block w-full hover:bg-yellow-300 " type="submit" >{isLogin ? "Login" : "Register"}</button>
                    
                </form>
                <div className="flex-row text-center">
                <h1 className="text-gray-400 my-2">----------or----------</h1>
                <button className="rounded px-2 py-3 border-2 flex mx-auto hover:border-green-400" onClick={signInUsingGoogle}><span className="inline-block text-red-300"><img className="w-5 h-5" src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt=""/></span><span className="my-auto ml-2">Sign in with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
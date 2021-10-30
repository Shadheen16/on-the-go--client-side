import React from 'react';


const Button = ({btnText}) => {
    return (
        <div>
        <button className="bg-green-400 hover:bg-yellow-300 px-3 text-lg text-gray-800 py-2">{btnText}</button>
        </div>
    );
};

export default Button;
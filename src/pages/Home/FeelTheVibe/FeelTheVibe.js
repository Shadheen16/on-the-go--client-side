import React from 'react';
import SectionHeader from '../../../shared/SectionHeader/SectionHeader';

const FeelTheVibe = () => { 
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:my-10 md:my-20 px-10 md:px-20">
                <div className="max-w-xl overflow-hidden">
                    <div>
                        <img className="w-full" src="https://images.unsplash.com/photo-1530804458434-67fe207c3a71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                </div>
                <div>
                    <SectionHeader
                    headerText="Feel The Vibe"
                    addClass="text-gray-600"
                    ></SectionHeader>
                    <p>
                        Youn can't ever imagine  Pariatur facilis velit expedita explicabo tenetur illo a non, earum praesentium repellendus, adipisci, natus laborum voluptas commodi est. Reiciendis expedita sequi facere.
                    </p>
                    <button className="px-3 py-2 border-2 border-gray-600 rounded-md mt-5 hover:text-red-500" >Find More</button>
                </div>
            </div>
        </div>
    );
};

export default FeelTheVibe;
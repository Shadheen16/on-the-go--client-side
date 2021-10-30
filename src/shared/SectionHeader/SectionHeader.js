import React from 'react';

const SectionHeader = ({headerText, addClass}) => {
    return (
        <div>
             <h1 className={`text-4xl md:text-6xl font-bold mb-5 ${addClass}`}>{headerText}</h1>
        </div>
    );
};

export default SectionHeader;
import React from 'react';

function Intro() {
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1md:mb-3 font-bold">Daniel Richardson</h1>
            <p className="text-basemd:text-xl mb-3 font-medium">Computer Engineering Student</p>
            {/* Use <br /> for new paragraph breaks*/}
            <p className='text-sm max-w-xl mb-6 font-bold'>Hi, welcome to my portfolio! My name is Daniel Richardson, and I am a Junior Computer Engineering student at the University of Pittsburgh. I am pursuing a focus in Machine Learning, and blah blah blah blah blah blah blah blah blah</p>
        </div>
    )
}

export default Intro;
import React from 'react';

function Intro() {
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7x1 mb-1md:mb-3 font-bold">Daniel</h1>
            <p className="text-basemd:text-xl mb-3 font-medium">Computer Engineering Student</p>
            {/* Use <br /> for new paragraph breaks*/}
            <p className='text-sm max-w-xl mb-6 font-bold'>this will be my bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default Intro;
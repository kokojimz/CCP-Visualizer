import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='text-white'>
            <div className="md:text-4xl sm:text-3xl text-2xl max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>Coin Change Problem</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>Simulator</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold'>
                        Simple and cool project for
                    </p>
                    <Typed className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-gray-600'
                        strings={['Algorithm','Design','Analysis']} 
                        typeSpeed={110} 
                        backSpeed={120} 
                        loop
                    />
                </div>
                <button onClick={() => scrollToSection('Explanation')} className='bg-[#00df9a] w-[150px] text-[25px] rounded-md font-bold my-6 mx-auto py-3 text-black'>
                    View More
                </button>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [' Algorithm',' Design',' Analysis'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 110,
            backSpeed: 120,
            backDelay: 110,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='text-white'>
            <div className="md:text-4xl sm:text-3xl text-2xl max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold p-2'>Coin Change Problem</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-6'>Simulator</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold'>
                        Simple and cool project for 
                    </p>
                    <div className='p-[10px] md:text-4xl sm:text-3xl text-2xl font-bold md:pl-4 pl-2 text-gray-500'>
                        <span ref={el}></span>
                    </div>
                </div>
                <button onClick={() => scrollToSection('Explanation')} className='bg-[#00df9a] h-16 w-[150px] text-[25px] rounded-md font-bold my-6 mx-auto py-3 text-black'>
                    View More
                </button>
            </div>
        </div>
    );
};

export default Hero;
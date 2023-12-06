import React from 'react'
import { useNavigate } from "react-router-dom";
import Laptop from "../../assets/laptop.jpg";

function Explanation() {
    const navigate = useNavigate();
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] text-[30px] font-bold'>Coin Change Problem</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Explanation</h1>
                    <p align="justify">
                        The Coin Change Problem is considered by many to be essential to 
                        understanding the paradigm of programming known as Dynamic Programming. 
                        The two often are always paired together because the coin change problem encompass the 
                        concepts of dynamic programming. For those who don’t know about dynamic programming it is according to Wikipedia,<br />
                        <i><b>“both a mathematical optimization method and a computer programming method … it refers to simplifying a complicated problem by breaking it down into simpler sub-problems”.</b></i>
                    </p>
                    <button onClick={() => navigate('/Coinchange')} className='bg-black text-[#00df9a] w-[150px] text-[20px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Explanation

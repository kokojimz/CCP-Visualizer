import React from 'react'
import { useNavigate } from "react-router-dom";
import Coin from "../../assets/HD-wallpaper-gold-gold-bullion-gold-3d-gold-coins.jpg"

function Explanation() {
    const navigate = useNavigate();
    return (
        <div id='Explanation' className='w-full bg-white py-16 px-4'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4' src={Coin} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] text-[30px] font-bold'>Coin Change Problem</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Explanation</h1>
                    <p align="justify">
                        The Coin Change Problem is considered by many to be essential to understanding 
                        the paradigm of programming known as Dynamic Programming. The two often are always paired 
                        together because the coin change problem encompass the concepts of dynamic programming. <br /><br />
                        Imagine you have different coins with various values, and you want to make a specific 
                        amount using combinations of these coins. The question is, how many ways are there to make that amount?,<br /><br />
                        <b>Example:</b>
                        <ul>
                            <li>- Coins: 1, 2, 5 </li><br />
                            <li>- Target amount: 7</li><br />
                        </ul>
                        <b>So the ways to make 7 with the given coins is: </b>
                        <ul>
                            <li>1 + 1 + 1 + 1 + 1 + 1 + 1</li><br />
                            <li>1 + 1 + 1 + 1 + 2</li><br />
                            <li>1 + 1 + 5</li><br />
                            <li><b><i>... and so on.</i></b></li><br /><br />
                        </ul>
                        <b>Dynamic Programming</b> is an approach where we break down a large problem into smaller 
                        sub-problems and store the solutions to these sub-problems to avoid redundant calculations. 
                        In other words, we simplify a complex problem into a series of smaller and more manageable problems. <br /><br />
                        <b>Simple example: </b>
                        Consider the problem of calculating the Fibonacci sequence for a given number. Without Dynamic Programming, 
                        we might have to recalculate the same values repeatedly. However, with Dynamic Programming, 
                        we can store previously calculated values for reuse, saving time and resources. <br /><br />
                        <b>Conclusion:</b><br /><br />
                        The Coin Change Problem is a classic example where Dynamic Programming can be used to optimize the solution. 
                        By breaking down a complex problem into smaller sub-problems, we can identify patterns and avoid 
                        redundant calculations, improving the efficiency and performance of the program.
                    </p>
                    <button onClick={() => navigate('/Coinchange')} className='bg-black text-[#00df9a] w-[150px] text-[20px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Explanation

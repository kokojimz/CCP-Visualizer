import React from 'react'
import Aldy from "../../assets/68384.jpg"
import Kenny from "../../assets/S__30703618_0.jpg"

function Cards() {
    return (
        <div id='OurTeam' className='w-full py-[3rem] px-4 bg-white'>
            <div className='md:text-4xl sm:text-3xl text-2xl max-w-[800px] h-56 mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold text-[#00df9a] py-2'>Our Team</h1>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mt-10 bg-[#EAECEE ]'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white rounded-3xl' src={Aldy} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8 text-gray-600'>2602141846</h2>
                    <p className='text-center text-2xl font-bold'>REYNALDY MARCHELL BAGAS ADJI</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 text-xl'>Web Developer</p>
                        <p className='py-2 border-b mx-8 '><i>"Ngoding itu berat aku ga bakal kuat biar Chat gpt aja"</i></p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mt-10 bg-[#EAECEE ]'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white rounded-3xl' src={Aldy} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8 text-gray-600'>2602119915</h2>
                    <p className='text-center text-2xl font-bold'>MUHAMMAD ZIDDAN AZZAKY</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 text-xl'>Web Developer</p>
                        <p className='py-2 border-b mx-8 '><i>"Ngoding itu berat aku ga bakal kuat biar Chat gpt aja"</i></p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mt-10 bg-[#EAECEE ]'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white rounded-3xl' src={Kenny} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8 text-gray-600'>2602115015</h2>
                    <p className='text-center text-2xl font-bold'>AARON KENNY RIJADI</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 text-xl'>Course Tutor</p>
                        <p className='py-2 border-b mx-8 '><i>"Once you change the coin, you need to recount the coin change"</i></p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mt-10 bg-[#EAECEE ]'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white rounded-3xl' src={Aldy} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8 text-gray-600'>2602138113</h2>
                    <p className='text-center text-2xl font-bold'>NICHOLAS CHRISTIAN</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 text-xl'>UI/UX Designer</p>
                        <p className='py-2 border-b mx-8 '><i>"Ngoding itu berat aku ga bakal kuat biar Chat gpt aja"</i></p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300 mt-10 bg-[#EAECEE ]'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white rounded-3xl' src={Aldy} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8 text-gray-600'>2602134531</h2>
                    <p className='text-center text-2xl font-bold'>MUHAMMAD BAGIER ASSEGGAF</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8 text-xl'>UI/UX Designer</p>
                        <p className='py-2 border-b mx-8 '><i>"Ngoding itu berat aku ga bakal kuat biar Chat gpt aja"</i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
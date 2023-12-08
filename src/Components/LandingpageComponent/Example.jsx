import React from 'react'

function Example() {
    return (
        <div id='Example' className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 '>
            <div className='lg:col-span-1'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a] text-[30px]'>Video Example</h1>
                <p className='md:text-2xl sm:text-1xl text-xl font-bold py-2'>By AARON KENNY RIJADI</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <iframe className='p-3 flex w-full rounded-md'
                        width="550px" 
                        height="400px" 
                        src="https://www.youtube.com/embed/DJ4a7cmjZY0?si=Ue57dmjF_x1XzflI" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen="true">
                    </iframe>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Example
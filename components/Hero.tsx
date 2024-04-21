import Link from 'next/link'
import React from 'react'


function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-7xl mx-auto pt-20 lg:pt-0 px-7 2xl:-px-0'>
                <div className="flex items-center flex-col lg:flex-row gap-5">
                    <div data-aos="fade-left" data-aos-duration="2500" className="w-full lg:w-2/5">

                        <h1 className='text-3xl lg:text-4xl font-semibold text-white'>
                            Making Web3 Accessible
                        </h1>
                        <p className='text-xl text-gray-400 mt-5'>Get your project <span style={{fontWeight: "bold"}}>Secured by Polkadot</span> affordably</p>
                        <div className='mt-10'>
                            <Link
                                href='#components'>
                                <button className=' bg-white text-black bg-sky-500 hover:text-zinc-800 transition duration-150 px-7 py-3 rounded-md'>Explore</button>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className=" w-full lg:w-3/5 
                relative
                bg-[url(/Union.svg)] bg-no-repeat bg-top bg-cover
                py-20">

                        <div className='w-full lg:w-3/5 mx-auto flex flex-col gap-1 z-20 text-gray-300'>
                            <img src="/Hero.gif" alt="" className='w-full scale-75' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
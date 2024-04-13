import React from 'react'

function Coretime() {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" id='components' className='bg-[#000811] pt-14 pb-36'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className='text-white text-3xl font-semibold text-center pt-20'>What is Coretime?</h1>

                <div data-aos="fade-up" className="flex justify-between lg:flex-row bg-opacity-5 rounded-lg p-10 lg:p-20">
                    <div data-aos="fade-up" data-aos-duration="3000" className='w-full lg:w-[40%]'>
                        <img src="/core.png" alt="" className=' scale-75' />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='w-full lg:w-[60%] flex flex-col justify-center gap-5'>
                        <p className='text-gray-200 lg:text-lg'>
                            Projects need to reserve Coretime on Polkadot's cores to access its secure and interoperable blockspace. We are offering the platform to purchase chunks of Coretime cheaply.
                        </p>

                        <a href="https://wiki.polkadot.network/docs/polkadot-direction" target='_blank' className='mt-2'>
                            <button className='border-2 border-sky-500 hover:bg-sky-500 text-white transition duration-300  px-5 py-2 rounded-md w-[150px] text-sm'>
                                Learn more
                            </button>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Coretime;


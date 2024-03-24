import React from 'react'

function Team() {
    return (
        <div id='team' data-aos="fade-up" data-aos-duration="3000">
            <section className="text-gray-600 body-font">
                <div className="max-w-7xl px-5 py-24 mx-auto 2xl:px-0">
                    <div className="flex flex-wrap w-full mb-10 lg:mb-20">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className='text-sky-500 text-2xl font-semibold text-center pt-20'>Team</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap lg:w-2/3 mx-auto">
                        <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-1/2 p-4">
                            <div className="bg-sky-500 border border-sky-500 border-opacity-20 bg-opacity-5 p-7 lg:p-10 rounded-lg flex flex-col justify-center items-center">
                                <img className="h-40 w-40 rounded-full object-cover object-center mb-6" src="sergej.jpg" alt="content" />
                                <h3 className="tracking-widest text-sky-500 text-base font-medium title-font">SERGEJ SAKAC</h3>
                                <h2 className="text-xs text-gray-400 mt-1 mb-4 italic">Core developer & Founder</h2>
                                <p className="leading-relaxed text-xs text-gray-500 text-center">Sergej is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for two years now. Sergej is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-1/2 p-4">
                            <div className="bg-sky-500 border border-sky-500 border-opacity-20 bg-opacity-5 p-7 lg:p-10 rounded-lg flex flex-col justify-center items-center">
                                <img className="h-40 w-40 rounded-full object-cover object-center mb-6" src="sergejsr.jpeg" alt="content" />
                                <h3 className="tracking-widest text-sky-500 text-base font-medium title-font">SERGEJ SAKAC SR.</h3>
                                <h2 className="text-xs text-gray-400 mt-1 mb-4 italic">COO</h2>
                                <p className="leading-relaxed text-xs text-gray-500 text-center">Sergej Sakac Sr. is an engineer with a master's degree and over 20 years of experience in organizational roles within the IT and engineering industries. He is responsible for the operational functions of the RegionX project.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="w-full lg:w-1/2 p-4">
                            <div className="bg-sky-500 border border-sky-500 border-opacity-20 bg-opacity-5 p-7 lg:p-10 rounded-lg flex flex-col justify-center items-center">
                                <img className="h-40 w-40 rounded-full object-contain object-center mb-6" src="Oliver.jpg" alt="content" />
                                <h3 className="tracking-widest text-sky-500 text-base font-medium title-font">OLIVER LIM</h3>
                                <h2 className="text-xs text-gray-400 mt-1 mb-4 italic">Full-stack developer</h2>
                                <p className="leading-relaxed text-xs text-gray-500 text-center">Oliver is a full stack blockchain developer with 2 years of Rust & Substrate development experience. He was involved in 3 projects granted by Web3 Foundation - Imbue network, Fair squares and the Dotflow. He worked with Sergej on the Dotflow application.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
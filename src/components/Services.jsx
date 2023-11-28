import React from 'react';
import xcregions from '../images/xcregions.png'; 
import market from '../images/market.png';
import img3 from '../images/hosting.svg';
import weigher from '../images/weigher.png';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-gray-900 uppercase font-bold">components</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-900">RegionX is developing multiple components for the new Agile Coretime model.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img style={{width: "250px", padding: "25px", margin: "auto"}} alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={xcregions} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Cross-Chain Regions</h2>
                                    <p className="text-md font-medium">
                                    RegionX provides a solution for executing cross-chain region transfers, an essential component for the development of a decentralized Coretime market. 
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img style={{width: "250px", padding: "25px", margin: "auto"}} alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={market} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Secondary Coretime Market</h2>
                                    <p className="text-md font-medium">
                                    We are building a secondary Coretime market that enables developers and traders to buy and sell Coretime effortlessly. Our market supports a dynamic pricing model that mirrors the wastage of Coretime when not in use.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img style={{width: "250px", margin: "40px auto"}} alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Coretime Hub</h2>
                                    <p className="text-md font-medium">
                                    We are also developing the UI that will enable users to perform any operations on their Coretime. Coretime Hub also provides the UI for cross-chain Regions, as well as Coretime trading.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img style={{width: "250px", padding: "25px", margin: "auto"}} alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={weigher} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Corespace Weigher</h2>
                                    <p className="text-md font-medium">
                                    The Corespace weigher project provides parachain teams with the data necessary to track their Coretime utilization. This component is crucial for making informed decisions in the Coretime market.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;
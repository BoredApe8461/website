import React from 'react'



function KeyComponents() {


    const components = [
        {
            name: 'Cross-Chain Regions',
            description: 'RegionX offers a solution for transferring regions across chains. This enables the creation of a decentralized, secondary Coretime marketplace.',
            image: '/xcRegions.png'
        },
        {
            name: 'Secondary Coretime Market',
            description: 'A secondary Coretime market that enables developers and traders to buy and sell Coretime effortlessly.',
            image: '/Market.png'
        },
        {
            name: 'Coretime Hub',
            description: 'A central hub where users will be able to perform operations on their Coretime and easily access the marketplace.',
            image: '/CoretimeHub.png'
        },
        {
            name: 'Corespace Weigher',
            description: 'A component that provides parachain teams with the data necessary to track their Coretime utilization.',
            image: '/Weigher.png'
        },
    ]






    return (
        <div data-aos="fade-up" data-aos-duration="2000" id='components' className='bg-[#000811] pt-14 pb-36'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <h1 className='text-sky-500 text-2xl font-semibold text-center pt-20'>Key Project Components</h1>

                <div data-aos="fade-up"
                    data-aos-duration="2000"
                    className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20'>
                    {
                        components.map((component, index) => (
                            <div key={index} className='flex flex-col gap-5 p-7 border-sky-500 hover:bg-sky-500 hover:bg-opacity-5 border-opacity-20 border rounded-xl hover:translate-y-[-10px] transition duration-500'>
                                <div className='flex flex-col items-center gap-5'>
                                    <img src={component.image} alt="" className='w-[100px]' />
                                    <div className='text-center'>
                                        <h1 className='text-white text-xl font-semibold'>
                                            {component.name}
                                        </h1>
                                        <p className='text-gray-500 text-sm pt-3'>
                                            {component.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default KeyComponents
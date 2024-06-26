import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
    return (
        <div className=''>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>
                <div className='flex justify-between items-center py-5'>
                    <div className='flex items-center'>
                        <img src='https://i.ibb.co/k646d45/logo.png' alt='logo' className=' w-[70px]' />
                        <div className=''>
                            <h1 className='text-white text-2xl font-semibold'>RegionX</h1>
                        </div>
                    </div>


                    {/* ------MOBILE MENU------ */}
                    <Sheet>
                        <SheetTrigger className='text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 lg:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </SheetTrigger>

                        <SheetContent
                            className='bg-[#12161B] text-[#12161B]'
                            side={'right'}
                        >
                            {/* close */}
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='flex justify-start ml-5'>
                                        <SheetTrigger>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-12 h-12 border-white border rounded-lg p-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </SheetTrigger>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col text-white pt-10">
                                <div className='flex flex-col ml-5'>
                                    <div className='flex flex-col gap-7 justify-start'>
                                        <a href='https://regionx.gitbook.io/wiki' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>Wiki</a>
                                        <a href='https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>White Paper</a>
                                        <a href='https://github.com/RegionX-Labs' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>GitHub</a>
                                        <a href='#team' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>Team</a>

                                    </div>
                                </div>
                                <button className='border-2 border-sky-500 hover:bg-sky-500 hover:text-white transition duration-300  px-2 py-2 rounded-md mt-10'>Launch App | Soon</button>
                            </div>
                        </SheetContent>
                    </Sheet>




                    {/* --DESKTOP MENU-- */}
                    <div className='lg:flex items-center gap-7 text-sm text-zinc-300 hidden '>
                        <div className='flex items-center'>
                            <div className='flex items-center gap-7'>
                                <a href='https://regionx.gitbook.io/wiki' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>Wiki</a>
                                <a href='https://github.com/RegionX-Labs/Docs/blob/main/RegionX-Core.pdf' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>White Paper</a>
                                <a href='https://github.com/RegionX-Labs' target='_blank' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>GitHub</a>
                                <a href='#team' className=' font-medium hover:text-sky-500 transition duration-200 cursor-pointer'>Team</a>

                            </div>
                        </div>
                        <button onClick={() => window.location.href = "https://app.regionx.tech/"} 
                        className='border-2 border-sky-500 hover:bg-sky-500 hover:text-white transition duration-300  px-5 py-2 rounded-md ml-5'>Launch App</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'

function Community() {
    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <section className="text-gray-600 body-font">
                <div className="max-w-7xl px-5 py-24 mx-auto 2xl:px-0">
                    <div className="flex flex-wrap w-full mb-10 lg:mb-20">
                        <div className="w-full mb-6 lg:mb-0">
                            <h1 className='text-sky-500 text-2xl font-semibold text-center pt-20'>Join our community</h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 w-full lg:w-4/5 mx-auto pb-20">
                        <div data-aos="fade-up" data-aos-duration="3000" className="px-5 py-10 border border-sky-500 border-opacity-20 rounded-lg">
                            <img className="h-10 mb-6 mx-auto" src="https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png" alt="content" />
                            <h3 className="tracking-widest text-sky-500 text-base font-medium title-font text-center">X (Twitter)</h3>
                            <a href="https://twitter.com/RegionXLabs" target="_blank" rel="noopener noreferrer">
                                <button className="flex mx-auto mt-5 text-white bg-gray-900 transition duration-200 hover:bg-sky-500 border-0 py-2 px-8 focus:outline-none rounded">Follow</button>
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="px-5 py-10 border border-sky-500 border-opacity-20 rounded-lg">
                            <img className="h-10 mb-6 mx-auto" src="/linkedin.png" alt="content" />
                            <h3 className="tracking-widest text-sky-500 text-base font-medium title-font text-center">LinkedIn</h3>
                            <a href="https://www.linkedin.com/company/regionx/" target="_blank" rel="noopener noreferrer">
                                <button className="flex mx-auto mt-5 text-white bg-gray-900 transition duration-200 hover:bg-sky-500 border-0 py-2 px-8 focus:outline-none rounded">Follow</button>
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="px-5 py-10 border border-sky-500 border-opacity-20 rounded-lg">
                            <img className="h-10 mb-6 mx-auto" src="/telegram.png" alt="content" />
                            <h3 className="tracking-widest text-sky-500 text-base font-medium title-font text-center">Telegram</h3>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <button className="flex mx-auto mt-5 text-white bg-gray-900 transition duration-200 hover:bg-sky-500 border-0 py-2 px-8 focus:outline-none rounded">Soon</button>
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="px-5 py-10 border border-sky-500 border-opacity-20 rounded-lg">
                            <div className="flex justify-center pb-5">
                                <svg width="40" height="40" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.9717 17.6062C34.9717 27.3295 27.1429 35.2117 17.4862 35.2117C7.82938 35.2117 0 27.3277 0 17.6062C0 7.88463 7.82879 0 17.4862 0C27.1435 0 34.9717 7.88285 34.9717 17.6062ZM54.154 17.6062C54.154 26.7586 50.2396 34.181 45.4109 34.181C40.5822 34.181 36.6678 26.7586 36.6678 17.6062C36.6678 8.45376 40.5816 1.03132 45.4103 1.03132C50.239 1.03132 54.1534 8.45139 54.1534 17.6062M62 17.6062C62 25.8045 60.6235 32.4546 58.925 32.4546C57.2266 32.4546 55.8507 25.8063 55.8507 17.6062C55.8507 9.40607 57.2272 2.75772 58.925 2.75772C60.6229 2.75772 62 9.40548 62 17.6062Z" fill="#ffffff"></path>
                                </svg>
                            </div>
                            <h3 className="tracking-widest text-sky-500 text-base font-medium title-font text-center">Medium</h3>
                            <a href="https://medium.com/@regionx" target="_blank" rel="noopener noreferrer">
                                <button className="flex mx-auto mt-5 text-white bg-gray-900 transition duration-200 hover:bg-sky-500 border-0 py-2 px-8 focus:outline-none rounded">Follow</button>
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Community
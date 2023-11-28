import React from 'react';
import sergej from '../images/sergej.jpg';
import oliver from '../images/oliver.jpg';

const Team = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section id="team" data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-gray-900 uppercase font-bold">Team</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                    </div>

                
                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ textAlign: "center", width: "350px", marginRight: "150px" }}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img style={{ borderRadius: "100%", width: "250px" }} src={sergej} alt="Sergej Sakac" />
                            </div>
                            <h2 className="my-2 text-center text-gray-900 font-bold">Sergej Sakac</h2>
                            <h3 className="my-2 text-center text-gray-900 italic">Core developer & Founder</h3>
                            <p className="my-2 text-center text-gray-900">
                                Sergej is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for more than a year now. Sergej is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.
                            </p>
                        </div>

                        <div style={{ textAlign: "center", width: "350px", marginLeft: "150px" }}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img style={{ borderRadius: "100%", width: "250px" }} src={oliver} alt="Oliver Lim" />
                            </div>
                            <h2 className="my-2 text-center text-gray-900 font-bold">Oliver Lim</h2>
                            <h3 className="my-2 text-center text-gray-900 italic">Full-stack developer</h3>
                            <p className="my-2 text-center text-gray-900">
                                Oliver is a member of the Polkadot Fellowship. He has been an external core contributor on substrate and polkadot for more than a year now. Oliver is also a recent Engineering alumni of the Polkadot Blockchain Academy (PBA) held in Berkeley.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team;

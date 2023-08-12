import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facilities = () => {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch('/facilities.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='max-w-7xl mx-auto mt-12'>
            <div className='text-center  mb-14'>
                <span
                    className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                >Facilities</span>
            </div>
            <div data-aos="zoom-in" className='grid grid-cols-2 md:grid-cols-4 gap-4 my-8 border-4 border-white shadow-xl'>
                {
                    facilities.map(facility =>
                        <>
                            <div key={facility.id} style={{ backgroundImage: `url(${facility.url})`, backgroundColor: "rgb(140,140,140)" }} className='h-[250px] bg-center bg-cover bg-no-repeat bg-blend-multiply rounded hover:scale-105 hover:cursor-pointer'>
                                <h1 className='text-green-400 font-bold text-xl p-4'>{facility.name}</h1>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Facilities;
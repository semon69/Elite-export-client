import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import { Link } from 'react-router-dom';


const TopStudents = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('/topStudents.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center  md:mb-20 mb-5 mt-6'>
                <span
                    className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                >Top Students</span>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper border-4 border-white"
            >

                {
                    players.map(player =>
                        <SwiperSlide key={players._id}>
                            <div className='md:flex gap-5'>
                                <img className='md:w-[550px]' src={player.image} alt="" />
                                <div className='p-6 md:pr-20 space-y-4'>
                                    <p className='text-green-500 font-bold text-4xl'>{player.name}</p>
                                    <p className='font-bold text-2xl'>Current Club: <span className='text-green-500'>{player.currentClub}</span></p>
                                    <div className='md:flex justify-between font-bold text-2xl '>
                                        <p>Nationality: <span className='text-green-500'>{player.country}</span></p>
                                        <p>Career Goals: <span className='text-green-500'>{player.goals}</span></p>
                                    </div>
                                    <p>
                                        {player.about}
                                    </p>
                                    <button className='border p-2 bg-green-500 text-white font-bold rounded'> <Link to={player.link}>See More About: {player.name.split(" ")[0]}</Link></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
                
            </Swiper>
        </div>
    );
};

export default TopStudents;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
    return (
        <div className='my-10'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='h-[660px] bg-zinc-200'>
                        <div className='flex flex-col md:flex-row'>
                            <img className='w-full md:w-1/2 p-4 rounded' src="https://i.ibb.co/6B8tkqH/undraw-playing-golf-y8t9.png" alt="" />
                            <div className='text-center mt-12 w-full md:w-1/2 space-y-4'>
                                <h2 className='bg-gradient-to-r from-purple-800 to-red-500 text-transparent bg-clip-text text-5xl font-bold'>La Masia</h2>
                                <p>The Ciutat Esportiva Joan Gamper training complex has in the La Masia-Centre de Formació <br /> Oriol Tort a unique residence facility due to its many uses and its architectural individuality</p>
                                <img className='w-full h-[442px]' src="https://cdn.pixabay.com/photo/2017/01/07/17/25/golfer-1960998_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='h-[660px] bg-zinc-200'>
                        <div className='flex flex-col md:flex-row'>
                            <img className='w-full md:w-1/2 p-4 rounded' src="https://i.ibb.co/GsWRhpr/undraw-track-and-field-33qn.png" alt="" />
                            <div className='text-center mt-12 w-full md:w-1/2 space-y-4'>
                                <h2 className='bg-gradient-to-r from-purple-800 to-red-500 text-transparent bg-clip-text text-5xl font-bold'>La Masia</h2>
                                <p>The Ciutat Esportiva Joan Gamper training complex has in the La Masia-Centre de Formació <br /> Oriol Tort a unique residence facility due to its many uses and its architectural individuality</p>
                                <img className='w-full h-[410px]' src="https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                      
                    <div className='h-[660px] bg-zinc-200'>
                        <div className='flex flex-col md:flex-row'>
                            <img className='w-full md:w-1/2 p-4 rounded' src="https://i.ibb.co/KwjT8dp/undraw-goal-0v5v.png" alt="" />
                            <div className='text-center mt-12 w-full md:w-1/2 h-[563px] space-y-4'>
                                <h2 className='bg-gradient-to-r from-purple-800 to-red-500 text-transparent bg-clip-text text-5xl font-bold'>La Masia</h2>
                                <p>The Ciutat Esportiva Joan Gamper training complex has in the La Masia-Centre de Formació <br /> Oriol Tort a unique residence facility due to its many uses and its architectural individuality</p>
                                <img className='w-full h-[420px]' src="https://cdn.pixabay.com/photo/2016/07/21/18/11/football-1533210_640.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
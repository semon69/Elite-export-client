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
                    <div 
                    style={{
                        backgroundImage: "url('https://img.freepik.com/free-vector/sports-abstract-poster-blue-yellow-colors_1017-32335.jpg?size=626&ext=jpg&ga=GA1.1.1536495682.1680942137&semt=sph')"
                         }} className='lg:h-[760px] h-96 bg-center bg-no-repeat bg-slate-400 bg-blend-multiply bg-cover w-full'>
                        <div className=' text-white lg:p-40 pt-28 text-center italic'>
                            <div className='space-y-3'>
                                <h1 className='text-2xl lg:text-8xl font-bold'>Welcome To <span className='text-green-300 text-3xl lg:text-9xl'>La Masia-Lite</span> <br /> Sports Academy</h1>
                                <p className='font-bold lg:text-xl text-green-300'>Find your favorite one</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div style={{ 
                        backgroundImage: "url('https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?size=626&ext=jpg&ga=GA1.1.1536495682.1680942137&semt=sph')" 
                        }} className='lg:h-[760px] h-96 bg-center bg-no-repeat bg-slate-500 bg-blend-multiply bg-cover'>
                        <div className='text-white lg:p-44 pt-28 text-center italic'>
                            <div className='space-y-3'>
                                <h1 className='text-2xl lg:text-8xl font-bold'>Welcome To <span className='text-green-300 text-3xl lg:text-9xl'>La Masia-Lite</span> <br /> Sports Academy</h1>
                                <p className='font-bold lg:text-xl text-green-300'>Find your favorite one</p>
                            </div>
                           

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div style={{ 
                        backgroundImage: "url('https://images.pexels.com/photos/3006119/pexels-photo-3006119.jpeg?auto=compress&cs=tinysrgb&w=600')" 
                        }} className='lg:h-[760px] h-96 bg-center bg-no-repeat bg-slate-500 bg-blend-multiply bg-cover'>
                        <div className='text-white lg:p-44 pt-28 text-center italic'>
                            <div className='space-y-3'>
                                <h1 className='text-2xl lg:text-8xl font-bold'>Welcome To <span className='text-green-300 text-3xl lg:text-9xl'>La Masia-Lite</span> <br /> Sports Academy</h1>
                                <p className='font-bold lg:text-xl text-green-300'>Find your favorite one</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
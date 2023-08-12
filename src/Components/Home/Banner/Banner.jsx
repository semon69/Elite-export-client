import React, { useCallback } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import lottiData1 from '../Banner/lottie1.json'
import lottiData2 from '../Banner/lottie2.json'
import Lottie from "lottie-react";
// import { loadSlim } from "tsparticles-slim";

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
                    <div className='md:flex gap-10 mt-28 md:mt-1 items-center md:px-20 px-2'>
                        <div className='w-full md:w-1/2 '>
                            <div className='space-y-7'>
                                <h1 className='text-2xl lg:text-5xl font-bold'>Welcome To</h1>
                                <span className='text-green-500 text-3xl lg:text-8xl font-bold'>La Masia-Lite</span>
                                <p className='font-bold'>Sports Academy</p>
                                <p>In the heart of Catalonia, a renowned sporting haven stands as a testament to excellence and the art of player development. La Masia Sport Academy, nestled amidst the breathtaking landscapes of Spain, has etched its legacy as an iconic institution that shapes not just athletes, but future champions.</p>
                                <div>
                                    <span className='font-bold lg:text-xl text-green-500 border-b-4 border-green-500 pb-3 mt-5 cursor-pointer'>Find your favorite one</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <Lottie animationData={lottiData1} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='md:flex gap-10 mt-28 items-center md:px-20 px-2'>
                        <div className='w-full md:w-1/2 '>
                            <div className='space-y-7'>
                                <h1 className='text-2xl lg:text-5xl font-bold'>Welcome To</h1>
                                <span className='text-green-500 text-3xl lg:text-8xl font-bold'>La Masia-Lite</span>
                                <p className='font-bold'>Sports Academy</p>
                                <p>In the heart of Catalonia, a renowned sporting haven stands as a testament to excellence and the art of player development. La Masia Sport Academy, nestled amidst the breathtaking landscapes of Spain, has etched its legacy as an iconic institution that shapes not just athletes, but future champions.</p>
                                <div>
                                    <span className='font-bold lg:text-xl text-green-500 border-b-4 border-green-500 pb-3 mt-5 cursor-pointer'>Find your favorite one</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <Lottie animationData={lottiData2} />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>





            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#011E1D",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            /> */}
        </div>
    );
};

export default Banner;
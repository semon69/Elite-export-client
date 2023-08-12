import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

const Testimonials = () => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };

    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center  md:mb-20 mb-5 md:mt-12 mt-5'>
                <span
                    className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                > Testimonials</span>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper shadow-xl border-4 border-white"
            >
                {
                    testimonials.map(testimonial =>

                        <SwiperSlide className='p-10'>
                            <div className='md:flex items-center'>
                                <div className='w-full md:w-1/3 flex items-center gap-2'>
                                    <div className='w-40 h-40 border-l-8 border-green-500 p-3'>
                                        <img className='rounded-full border-8 border-green-500' src={testimonial.image} alt="" />
                                    </div>
                                    <div>
                                        <p className='font-bold text-2xl'>{testimonial.name}</p>
                                        <p className='font-bold'>{testimonial.profession}</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-2/3 font-semibold'>
                                    <p>" {testimonial.testimonial} "</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Testimonials;
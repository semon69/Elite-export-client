import React from 'react';
import '../AboutUs/AboutUs.css'
import lottieData from './lottie.json'
import Lottie from "lottie-react";

const AboutUs = () => {
    return (
        <div className='bgImage bg-fixed'>
            <div className='max-w-7xl mx-auto'>
                <div className='md:flex items-center'>
                    <div className='text-green-500 w-full md:w-1/2 p-2'>
                        <div className='mb-8'>
                            <span
                                className='text-4xl  font-bold mb-6 text-green-500 border-b-4 border-green-500 pb-3'
                            >About La-Masia</span>
                        </div>
                        <p className='text-white py-5'>La Masia, which translates to "The Farmhouse" in Catalan, is the renowned youth academy of FC Barcelona, one of the most successful and celebrated football clubs in the world. Located just outside Barcelona in Sant Joan Despí, La Masia has earned a reputation as one of the premier football academies globally, producing a remarkable number of talented players who have gone on to have successful careers not only with Barcelona but also in various top clubs and national teams.
                            Founded in 1979, La Masia has become a symbol of Barcelona's commitment to developing homegrown talent and playing an attractive, possession-based style of football known as "tiki-taka." The academy focuses not only on nurturing players' technical skills but also on instilling the club's values and philosophy. It places a strong emphasis on teamwork, creativity, and understanding the game both on and off the field.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Lottie animationData={lottieData} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
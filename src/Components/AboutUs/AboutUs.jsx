import React from 'react';
import '../AboutUs/AboutUs.css'

const AboutUs = () => {
    return (
        <div className='bgImage bg-fixed'>
            <div className='max-w-7xl mx-auto'>
                <p className='text-4xl text-center font-bold text-cyan-400 pt-5 underline'>About  La Masia</p>
                <p className='text-cyan-400 text-center py-5'>La Masia de Can Planes, usually shortened to <br /> La Masia is a term used for FC Barcelona's youth academy. <br /> The academy includes more than 300 young players. <br /> It has been an instrumental factor in Barcelona's European success,<br /> and produced several world class players in the early 2000s.</p>
                <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 lg:pt-10 text-cyan-400'>
                    <div className='border-2 border-black rounded'>
                        <img className='w-full' src="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                        <div>
                            <p className='py-3 font-bold ms-2'>We Have best Tennis trainer</p>
                        </div>
                    </div>
                    <div className='border-2 border-black rounded'>
                        <img className='w-full' src="https://images.pexels.com/photos/13741887/pexels-photo-13741887.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                        <div>
                            <p className='py-3 font-bold ms-2'>We Have best Football trainer</p>
                        </div>
                    </div>
                    <div className='border-2 border-black rounded'>
                        <img className='w-full' src="https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                        <div>
                            <p className='py-3 font-bold ms-2'>We Have best Ragby trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
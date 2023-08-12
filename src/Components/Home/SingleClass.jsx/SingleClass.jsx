import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

const SingleClass = ({ cls }) => {
    const { image, name, availableSeats, instructorName, price, _id } = cls
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    useEffect(() => {
        AOS.init();
    }, []);
    const handleSelect = () => {
        const myCart = { image, name, availableSeats, instructorName, price, email: user?.email, classId: _id }
        if (user) {
            fetch('https://sports-acedemy-server.vercel.app/myClass', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(myCart)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }
        else{
            navigate('/login')
        }
    }
    return (
        <div data-aos="zoom-in-right">
            <div className={`border-2 p-4 h-[450px] my-8 rounded shadow-2xl ${availableSeats == 0 && 'bg-red-600'}`}>
                <p className='text-2xl font-bold pb-3 text-green-500'>{name}</p>
                <img className='w-full h-[250px] rounded' src={image} alt="" />
                <p className='font-bold pt-2'>Instructor: <span className='text-xl text-green-500'>{instructorName}</span></p>
                <div className='flex justify-between items-center font-semibold py-2'>
                    <p>Available Seat: <span className='text-green-500 font-bold'>{availableSeats}</span></p>
                    <p>Price: <span className='text-green-500 font-bold'>${price}</span></p>
                </div>
                <button disabled={isAdmin || isInstructor || availableSeats == 0} onClick={handleSelect} className='btn bg-green-500 text-white'>Select</button>
            </div>
        </div>
    );
};

export default SingleClass;
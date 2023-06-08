import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')
    }
    return (
        <div className='w-4/5 mx-auto text-center my-10'>
            <h1 className='text-7xl font-bold text-gray-500 mb-10'>Opssss!</h1>
            <p className='text-orange-600 text-3xl my-5'>{error?.message}</p>
            <img src="https://i.ibb.co/F8pkBjn/undraw-Page-not-found-re-e9o6.png" alt="" />
            <button onClick={handleGoBack} className='btn bg-gradient-to-r from-red-600 to-indigo-700 text-white'>Back To Home</button>
        </div>
    );
};

export default ErrorPage;
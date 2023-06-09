import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useContext } from 'react';
import CheckoutForm from './CheckoutForm';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY_SECRET)

const Payment = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: myClass = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${user?.email}`)
            return res.data
        }
    })
    console.log(myClass);
    const total = myClass.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1>Payment Method</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} myClass={myClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;
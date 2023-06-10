import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        // enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure(`/paymentHistory?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div className='border-2 border-black m-5 py-8'>
            <h1 className='text-2xl font-bold ms-5 py-3'>Payment History</h1>
            <div className="overflow-x-auto border m-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-black text-lg font-semibold'>
                            <th>#</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((singleClass, index) =>
                                <tr key={singleClass._id} className='text-black'>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>{singleClass.date}</td>
                                    <td>{singleClass.quantity}</td>
                                    <td>{singleClass.price}</td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
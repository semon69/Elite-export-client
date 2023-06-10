import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/paymentHistory?email=${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h2>My Payment History</h2>
            <h1>Payment History: {payments.length}</h1>
            <div className="overflow-x-auto border m-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((singleClass, index) =>
                                <tr key={singleClass._id}>
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
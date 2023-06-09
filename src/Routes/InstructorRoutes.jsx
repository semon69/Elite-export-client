import React, { useContext } from 'react';
import useInstructor from '../Hooks/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Provider/AuthProvider';

const InstructorRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoutes;
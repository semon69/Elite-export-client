import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const savedUser = { name: result.user.displayName, email: result.user.email, image: result.user.photoURL }
                fetch('https://sports-acedemy-server.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Good job!',
                            'Registration Success',
                            'success'
                        )
                        navigate(from, { replace: true })
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div onClick={handleGoogleSignIn} className='border font-bold px-3 py-1 flex justify-center items-center gap-4 w-4/5 mx-auto hover:cursor-pointer hover:bg-green-500 hover:text-white'>
                <p><FcGoogle /></p>
                <p> Continue With Google</p>
            </div>

        </div>
    );
};

export default SocialLogin;
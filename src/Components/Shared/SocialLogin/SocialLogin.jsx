import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div onClick={handleGoogleSignIn} className='border px-3 py-1 flex justify-center items-center gap-4 w-4/5 mx-auto hover:cursor-pointer'>
                <p><FcGoogle /></p>
                <p> Continue With Google</p>
            </div>

        </div>
    );
};

export default SocialLogin;
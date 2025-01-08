import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { auth } from '../Firebase/Firebase.config';

const ForgetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()

    document.title = "Ecoventure | Password Reset"

    const [email, setEmail] = useState(location?.state?.email || null)
    const inputChangeHandle = (e) => {
        setEmail(e.target.value)
    }

    const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(()=>{
            window.open('https://mail.google.com/', '_blank');
            navigate('/login');
        })
    }

    return (
        <div className='flex flex-col items-center mt-7'>
            <form onSubmit={resetPassword} className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
    
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input onChange={inputChangeHandle} type="text" className="grow" name='name' placeholder='Your Email' value={email} />
                </label>
                </div>
                <button type='submit' className='btn bg-indigo-500 text-white hover:bg-indigo-600'>Reset Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;
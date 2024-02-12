import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    // Password Show Hide Toggle handle
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open)
    }
    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='bg-white px-14 py-8 rounded-3xl'>
                <h1 className='text-center text-4xl font-bold' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Login Form</h1>
                <div className='flex justify-center gap-2'>
                    <Link to="/login"><button className='w-32 bg-[#ff0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Login</button></Link>
                    <Link to="/sign-up"><button className='w-32 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Sign Up</button></Link>
                </div>
                <form>
                    <label htmlFor='email' className='text-xl font-semibold cursor-pointer'> Email </label><br />
                    <input name='email' type='email' placeholder="Type your email" className="text-lg py-2 px-3 mt-2 mb-2 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='email' />
                    <br />
                    <label htmlFor='password' className='text-xl font-semibold cursor-pointer'> Password </label><br />
                    <div className='relative'>
                        <input name='password' placeholder="Type your password" className="text-lg py-2 px-3 mt-3 mb-1 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='password' type={(open === false) ? 'password' : 'text'} />
                        <i onClick={handleToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-500'>{
                            (open === false) ? <FaEye /> : <FaEyeSlash />
                        }</i>
                    </div>
                    <div className='text-[#ff0000] text-md text-right font-semibold hover:text-[#000] cursor-pointer'>Forgot password ?</div>
                    <div className='flex justify-center'>
                        <button type="submit" className='w-96 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Login</button>
                    </div>
                </form>
                <p className='pt-5 mb-0 text-md text-center font-semibold'>Don&apos;t have an account ? Then <Link to="/sign-up" className='underline font-bold text-[16px] hover:text-[#ff0000]'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Login = () => {
    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='bg-white px-14 py-8 rounded-3xl'>
                <h1 className='text-center text-4xl font-bold' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Login Form</h1>
                <div className='flex justify-center gap-2'>
                    <button className='w-32 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.3s' }}>Login</button>
                    <button className='w-32 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.3s' }}>Sign Up</button>
                </div>
                <div>
                    <label htmlFor='email' className='text-xl font-semibold cursor-pointer'> Email </label><br />
                    <input name='email' type='email' placeholder="Type your email" className="text-lg py-2 px-3 mt-2 mb-2 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='email' />
                    <br />
                    <label htmlFor='password' className='text-xl font-semibold cursor-pointer'> Password </label><br />
                    <input name='password' type='password' placeholder="Type your password" className="text-lg py-2 px-3 mt-3 mb-1 w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='password' /><br />
                    <div className='text-[#ff0000] text-md text-right font-semibold hover:text-[#000] cursor-pointer'>Forgot password ?</div>
                    <div className='flex justify-center'>
                        <button className='w-96 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.3s' }}>Login</button>
                    </div>
                </div>
                <div className='text-center'>
                    <h2 className='pt-3 font-semibold'><span className='text-lg font-bold'>Or</span> Login with</h2>
                    <div className='flex justify-center pt-3 text-4xl gap-5 '>
                        <i className='cursor-pointer'><FcGoogle /></i>
                        <i className='cursor-pointer'><FaFacebook /></i>
                        <i className='cursor-pointer'><FaLinkedin /></i>
                    </div>
                    <p className='pt-3 mb-0 text-lg font-semibold'>Don&apos;t have an account ? Then <Link to="/registration" className='underline font-bold text-[16px] hover:text-[#ff0000]'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
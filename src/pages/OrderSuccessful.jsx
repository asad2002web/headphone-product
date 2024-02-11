import React from 'react';
import { ImCheckmark } from "react-icons/im";

const OrderSuccessful = () => {
    return (
        <div>
            {/* Thanks Section */}
            <div className='text-center bg-[#0f5149]'>
                <div className='flex justify-center text-[110px] pt-6 text-white'><ImCheckmark /></div>
                <h1 className='text-[68px] font-extrabold pt-3 text-center text-white' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>ধন্যবাদ</h1>
                <p className='text-[28px] font-extrabold pb-20 px-72 text-center text-white' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে। আমাদের একজন প্রতিনিধি আপনার সাথে কথা বলে আপনাকে বিস্তারিত জানিয়ে দিবেন</p>
            </div>
            {/* Order Details Section */}
            <div className=' w-full h-[590px] flex justify-center bg-[#f8f6f8]'>
                <div className='absolute w-[900px] bg-[#fff] border border-[#9fb5d6] rounded-2xl mt-10 py-10 px-14' style={{ boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                    <h3 className='text-[22px] font-semibold pb-4 ps-3' style={{ fontFamily: "'Anek Bangla', sans-serif" }}>Your order has been received.</h3>
                    <div className='bg-[#f8f6f8] flex justify-start gap-x-6 p-8 text-[#566376] text-[14px] mb-4'>
                        <div>
                            <p>Order number:</p>
                            <strong>382</strong>
                        </div>
                        <div className='border-l border-dashed border-[#ccc] ps-3'>
                            <p>Date:</p>
                            <strong>February 10, 2024</strong>
                        </div>
                        <div className='border-l border-dashed border-[#ccc] ps-3'>
                            <p>Total:</p>
                            <strong><span className='text-[0.75em] font-extrabold'>৳</span> 1,120.00</strong>
                        </div>
                        <div className='border-l border-dashed border-[#ccc] ps-3'>
                            <p>Payment method:</p>
                            <strong>Cash on delivery</strong>
                        </div>
                    </div>
                    <p className='text-[14px] text-[#566376]'>Pay with cash upon delivery.</p>
                    <ul className='bg-[#f8f6f8] pt-8 ps-8 pb-4 text-[#566376] text-[14px] mt-4'>
                        <h3 className='text-[20px] font-semibold pb-8  text-[#000]' style={{ fontFamily: "'Anek Bangla', sans-serif" }}>Order details</h3>
                        <li>
                            <div className='grid grid-cols-12 font-semibold pb-2 border-b border-dashed border-gray-400'>
                                <p className='col-span-5'>Product</p>
                                <p className='col-span-7'>Total</p>
                            </div>
                            <div className='grid grid-cols-12 py-2 border-b border-dashed border-gray-400'>
                                <p className='col-span-5 flex gap-2'>
                                    <span>Sample product <strong>× 1</strong></span>
                                </p>
                                <p className='col-span-7'><span className='text-[0.75em] font-extrabold'>৳</span> 1,000.00</p>
                            </div>
                            <div className='grid grid-cols-12 pt-2'>
                                <p className='col-span-5'>Subtotal:</p>
                                <p className='col-span-7'>
                                    <span><span className='text-[0.75em] font-extrabold'>৳</span> 1,000.00</span>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-2 '>
                                <p className='col-span-5'>Shipping:</p>
                                <p className='col-span-7'>
                                    <p><span className='text-[0.75em] font-extrabold'>৳</span> 120.00 <small> via Outside Dhaka</small></p>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-1 '>
                                <p className='col-span-5'>Payment method:</p>
                                <p className='col-span-7'>
                                    <p>Cash on delivery</p>
                                </p>
                            </div>
                            <div className='grid grid-cols-12 py-3 font-bold'>
                                <p className='col-span-5 font-semibold'>Total:</p>
                                <p className='col-span-7 font-bold'><span className='text-[0.75em] font-extrabold'>৳</span> 1,120.00</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='h-32 bg-white'></div>
        </div>

    );
};

export default OrderSuccessful;
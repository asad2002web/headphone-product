import React from 'react';

const OrderButton = () => {
    return (
        <div>
            <button className='bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 my-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "#000 0px 0px 15px", transition: '.5s'}}>অর্ডার করতে ক্লিক করুন</button>
        </div>
    );
};

export default OrderButton;
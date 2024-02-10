import React from 'react';
import ProductPhoto1 from "../../public/Photo/with-cover.jpg"
import ProductPhoto2 from "../../public/Photo/without-cover.jpg"
import ProductPhoto3 from "../../public/Photo/all-color1.jpg"
import ProductPhoto4 from "../../public/Photo/white-color.jpg"

const PhotoSection = () => {
    return (
        <div className='bg-[#2e2e2e] py-16 flex justify-center px-28'>
            <div className='grid grid-cols-2 gap-5'>
                <div className=' border-[10px] border-[#E2E2E2]' >
                    <img src={ProductPhoto1} alt="Headphones with cover" />
                </div>
                <div className=' border-[10px] border-[#E2E2E2]' >
                    <img src={ProductPhoto2} alt="Headphones without cover" />
                </div>
                <div className=' border-[10px] border-[#E2E2E2]' >
                    <img src={ProductPhoto3} alt="Headphones all color" />
                </div>
                <div className=' border-[10px] border-[#E2E2E2]' >
                    <img src={ProductPhoto4} alt="white color Headphones" />
                </div>
            </div>
        </div>
    );
};

export default PhotoSection;
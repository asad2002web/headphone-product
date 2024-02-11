import React from 'react';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div className='bg-[#2e2e2e]'>
            <Outlet/>
        </div>
    );
};

export default Authentication;
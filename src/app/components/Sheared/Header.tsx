import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='w-full'>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Header;
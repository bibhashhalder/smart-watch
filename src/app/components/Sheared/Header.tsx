import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='w-11/12'>
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Header;
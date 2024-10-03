import Image from 'next/image';
import React from 'react';
import image from '@/assets/amazon.jpg'
const Banner = () => {
    return (
        <div className='w-5/12 mx-auto text-center mt-8 bg-slate-400'>
            <Image className='w-full'  src={image} alt='Smart watch'/>
        </div>
    );
};

export default Banner;
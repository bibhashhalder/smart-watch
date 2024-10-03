import Image from 'next/image';
import React from 'react';
import image from '@/assets/amazon.png'
const Banner = () => {
    return (
        <div className='bg-zinc-100   '>
            <div className='w-10/12 flex items-center justify-between mx-auto'>
            <div>
                <h1 className='text-6xl'><span className='text-orange-600 font-bold'>Digital</span> <span className='animate-pulse text-3xl'>Smart Watch</span></h1>
            </div>
            <div className='py-4'>
                 <Image className='w-full'  src={image} alt='Smart watch'/>
            </div>
            </div>
        </div>
    );
};

export default Banner;
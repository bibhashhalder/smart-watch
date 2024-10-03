import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image from '@/assets/amazon.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4 w-3/4 mx-auto'>
            <div>
                <Image src={image} width={50} height={50} alt='logo'/>
            </div>
           <div className='flex justify-between w-5/12'>
           <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact Us</Link>
            <Link href='/register'>Sign Up</Link>
            <Link href='/login'>Sign In</Link>
           </div>
        </div>
    );
};

export default Navbar;
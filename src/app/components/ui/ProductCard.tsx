"use client"
import { IProducts } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FaCalendar } from 'react-icons/fa';

const ProductCard = ({product}:{product:IProducts}) => {
    const {id, title, publish_date, author_name, blog_image, description, total_likes} = product
    return (
        <div className='w-full mx-auto'>
           <div className='w-full border-2 p-2 rounded-md h-full'>
               <Image className='rounded-t-md w-full' src={blog_image} alt='product' width={500} height={500}/>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <p className='text-xl font-semibold'>{author_name}</p>
                <p className='text-sm'>{description.length>100?description.slice(0,180):description}...<Link className='text-teal-500 font-bold' href={`/blogs/${id}`}>Read More</Link></p>
                <div className='flex mt-2 justify-between gap-4 '>
                    <p className='flex gap-2'><span className='font-bold'><FaCalendar className='text-teal-400'/></span> {publish_date}</p>
                    <p className='flex gap-2'> <AiFillLike className='text-teal-400 text-xl'/>{total_likes}</p>
                </div>
           </div>
        </div>
    );
};

export default ProductCard;
'use client'
import { IProducts } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';

const SmallProductCard = ({product}:{product:IProducts}) => {
    console.log(product);
    const {id,blog_image, description, total_likes}=product
    return (
        <div className='w-full border-2 p-2 rounded-md'>
            <Image className='w-full rounded-t-md h-3/5' src={blog_image} width={250} height={250} alt='small card'/>
            <p>{description.length>100?description.slice(0,180):description}...<Link className='text-teal-500 font-bold' href={`/blogs/${id}`}>Read More</Link></p>
            <p className='flex gap-2'> <AiFillLike className='text-teal-400 text-xl'/>{total_likes}</p>
        </div>
    );
};

export default SmallProductCard;
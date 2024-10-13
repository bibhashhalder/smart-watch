import { IProducts } from '@/types';
import Image from 'next/image';
import React from 'react';

const SmallProductCard = ({product}:{product:IProducts}) => {
    const {blog_image, description, total_likes}=product
    return (
        <div className='w-full border-2 p-2 rounded-md'>
            <Image className='w-full rounded-t-md h-3/5' src={blog_image} width={250} height={250} alt='small card'/>
            <p>{description}</p>
            <p>{total_likes}</p>
        </div>
    );
};

export default SmallProductCard;
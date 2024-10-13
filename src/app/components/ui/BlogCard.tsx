import { IProducts } from '@/types';
import Image from 'next/image';
import React from 'react';

const BlogCard = ({blog}:{blog:IProducts}) => {
    const{title, publish_date, author_name, blog_image, description, total_likes} =blog
    return (
        <div className='w-full mx-auto'>
        <div className='w-full border-2 p-2 rounded-md h-full'>
            <Image className='rounded-t-md w-full' src={blog_image} alt='product' width={500} height={500}/>
             <h1 className='text-lg font-semibold'>{title}</h1>
             <p className='text-xl font-semibold'>{author_name}</p>
             <p className='text-sm'>{description}</p>
             <div className='flex mt-2 justify-between gap-4 '>
                 <p><span className='font-bold'>date:</span> {publish_date}</p>
                 <p>{total_likes}</p>
             </div>
        </div>
     </div>
    );
};

export default BlogCard;
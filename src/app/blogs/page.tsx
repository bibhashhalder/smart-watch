import React from 'react';
import { IProducts } from '@/types';
import BlogCard from '../components/ui/BlogCard';

const BlogPage = async() => {
     const res = await fetch('http://localhost:5000/blogs',{
        cache:'no-store'
     })
     const blogs = await res.json()
    return (
       
         <div className='w-4/5 mx-auto mt-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    blogs.map((blog:IProducts)=><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
         </div>
       
    );
};

export default BlogPage;
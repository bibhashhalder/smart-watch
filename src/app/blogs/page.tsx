/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react';
import { IProducts } from '@/types';
import BlogCard from '../components/ui/BlogCard';
import { useGetBlogsQuery } from '@/redux/Api/baseApi';

const BlogPage = () => {
    //  const res = await fetch('http://localhost:5000/blogs',{
    //     cache:'no-store'
    //  })
    //  const blogs = await res.json()
     const {data:blogs, isLoading, isError, error}=useGetBlogsQuery('')
    //  console.log(data);
    return (
       
         <div className='w-4/5 mx-auto mt-12'>
            <div className='grid grid-cols-3 gap-4'>
                {
                    blogs?.map((blog:IProducts)=><BlogCard key={blog.id} blog={blog}/>)
                }
            </div>
         </div>
       
    );
};

export default BlogPage;
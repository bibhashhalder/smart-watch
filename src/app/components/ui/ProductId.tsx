import { IProducts } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const ProductId =({blog}:{blog:IProducts}) => {
    console.log(blog);
    const { title, publish_date, author_name, blog_image, description, total_likes} =blog
    return (
        <div className='w-7/12 mt-12 mb-6 mx-auto'>
           <div className='w-full bg-blue-200 p-2 rounded-md h-full relative'>
               <Image className='rounded-t-md w-full' src={blog_image} alt='product' width={500} height={500}/>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <p className='text-xl font-semibold'>{author_name}</p>
                <p className='text-sm text-justify'>{description}</p>
                <div className='flex mt-2 justify-between mb-6 gap-4 '>
                    <p className='flex gap-2'><span className='font-bold'><FaCalendar className='text-teal-400'/></span> {publish_date}</p>
                    <p className='flex gap-2'> <AiFillLike className='text-teal-400 text-xl'/>{total_likes}</p>
                </div>
                <button className="bg-green-500 rounded-b-md text-center w-full absolute  left-0 bottom-0"><Link href='/blogs'>Blogs</Link></button>
           </div>
        </div>
    );
};

export default ProductId;
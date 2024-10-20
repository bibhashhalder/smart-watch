import ProductId from "@/app/components/ui/ProductId";
import { IProducts } from "@/types";

type IBlogId ={
    params:{
        blogId:string
    }
}
export const generateStaticParams = async ()=>{
    const res =await fetch('http://localhost:5000/blogs')
    const blogs =await res.json()
    return blogs.slice(0,3).map((blog:IProducts)=>({
        blogId:blog.id
    }))
}
const BlogDetailPage = async({params}:IBlogId) => {
    const res =await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:'no-store'
    })
    const blog =await res.json()
    console.log(blog);
    return (
        <div>
            <ProductId blog={blog}/>
        </div>
    );
};

export default BlogDetailPage;
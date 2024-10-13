type IBlogId ={
    params:{
        blogId:string
    }
}
const BlogDetailPage = ({params}:IBlogId) => {
    console.log(params);
    return (
        <div>
            
        </div>
    );
};

export default BlogDetailPage;
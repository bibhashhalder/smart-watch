import Products from "./components/Products/Products";

const HomePage = async() => {
  const res =await fetch('http://localhost:5000/blogs',{
    next:{
      revalidate:30
    }
  })
  const products =await res.json()
  
  return (
    <div>
      <Products products={products}/>
    </div>
  );
};

export default HomePage;
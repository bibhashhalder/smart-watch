/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProducts } from '@/types';
import React from 'react';
import ProductCard from '../ui/ProductCard';
import SmallProductCard from '../ui/SmallProductCard';

const Products = ({products}:{products:IProducts[]}) => {
    console.log(products);
    return (
        <div className=''>
            <h1 className='text-5xl font-bold text-center my-4 text-green-400'>All Products !!!!!!!!!!!</h1>
            <div className='grid grid-cols-2 gap-4 w-4/5 mx-auto my-6'>
                {
                    products.slice(0,2).map((product)=><ProductCard key={product.id} product={product} />)
                }
            </div>
            <div className='grid grid-cols-3 gap-4 w-4/5 mx-auto'>
                {
                    products.slice(2,5).map((product)=><SmallProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;
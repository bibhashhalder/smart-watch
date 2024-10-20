'use server'

import { IProducts } from "@/types"

export const createBlog =async (data:IProducts)=>{
    const res =await fetch('http://localhost:5000/blogs',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data),
        cache:'no-store'
    })
    const blogInfo =res.json()
    return blogInfo;
}
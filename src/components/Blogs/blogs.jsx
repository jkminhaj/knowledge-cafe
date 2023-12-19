import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/blog";

export default function Blogs ({handleAddToBookmark ,handleReadingTime}) {
    const [blogs , setBlogs ] = useState([])
    useEffect(()=>{fetch('blog-data.json').then(res=>res.json()).then(data=> setBlogs(data));},[])
    return (
        <div className="w-2/3">
            <p className="text-2xl font-bold">Blog Section {blogs.length}</p>
            {
                blogs.map(blog=><Blog key={blog.id} handleReadingTime={handleReadingTime} handleAddToBookmark={handleAddToBookmark} blog={blog} ></Blog>)
            }
        </div>
    )
}
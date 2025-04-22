import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
const Blogs = useLoaderData();


  return (
    <div>
        {
          Blogs.map((blog,index)=><Blog key={index} blog={blog}></Blog>)
        }
    </div>
  );
};

export default Blogs;
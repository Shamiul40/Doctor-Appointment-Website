import React from 'react';

const Blog = ({blog}) => {
  const {question, answer,date} = blog;
 
  return (
    <div className='my-6 bg-white p-4 rounded-lg shadow-lg'>
        <h1 className='text-xl font-bold'>{question}</h1>
        <hr className="border-dashed border-gray-300 my-2" />
        <p>Answer : <span>{answer}</span></p>
        <hr className="border-dashed border-gray-300 my-2" />
        <p>Added at : <span>{date}</span></p>
    </div>
  );
};

export default Blog;
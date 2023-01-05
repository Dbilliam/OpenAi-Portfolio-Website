import React from 'react'
import { useState } from 'react';
const Blog = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Blog Post 1',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
        },
        {
            id: 2,
            title: 'Blog Post 2',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
        },
        {
            id: 3,
            title: 'Blog Post 3',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
        },
    ]);

    return (
        <div className="container mx-auto py-12 px-4">
            <h3 className="text-3xl font-semibold mb-6 text-center">Blog</h3>
            {posts.map((post) => (
                <div key={post.id} className="mb-8">
                    <h4 className="text-2xl font-semibold mb-2">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <a
                        href="#"
                        className="px-4 py-2 font-bold text-white bg-gray-800 rounded-full focus:outline-none focus:shadow-outline-gray active:bg-gray-900 hover:bg-gray-900"
                    >
                        Read More
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Blog
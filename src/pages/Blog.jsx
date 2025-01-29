import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'React Basics',
      description: 'Learn the basics of React and how to create components.',
    },
    {
      id: 2,
      title: 'TailwindCSS Guide',
      description: 'A complete guide to using TailwindCSS in your projects.',
    },
    {
      id: 3,
      title: 'Routing in React',
      description: 'Understand routing in React with react-router-dom.',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

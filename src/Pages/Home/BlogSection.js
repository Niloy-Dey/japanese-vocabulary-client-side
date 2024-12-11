import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Importance of Vocabulary in English Learning",
    description:
      "Vocabulary is the building block of language. Learn why expanding your vocabulary is essential.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image
  },
  {
    id: 2,
    title: "Top 5 Tips for English Grammar Mastery",
    description:
      "Grammar can be tricky, but these tips will make learning grammar fun and effective.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image
  },
  {
    id: 3,
    title: "How to Improve Pronunciation Like a Native",
    description:
      "Pronunciation is key to sounding fluent. Discover how to master it step-by-step.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Latest Blogs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative mx-4 z-20 max-w-md w-full bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-6 shadow-lg hover:scale-105 transition-transform lg:ml-0"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              {/* Blog Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <button
                onClick={() => handleReadMore(blog.id)}
                className="w-full text-white bg-green-500 py-2 px-4 rounded-md hover:bg-black transition"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Component/Shared/Navbar";

const blogData = [
  {
    id: 1,
    title: "The Importance of Vocabulary in English Learning",
    content: "Here is the detailed content of the first blog...",
  },
  {
    id: 2,
    title: "Top 5 Tips for English Grammar Mastery",
    content: "Here is the detailed content of the second blog...",
  },
  {
    id: 3,
    title: "How to Improve Pronunciation Like a Native",
    content: "Here is the detailed content of the third blog...",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Navbar></Navbar>
      {blog ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {blog.title}
          </h1>
          <p className="text-gray-700 leading-relaxed">{blog.content}</p>
        </>
      ) : (
        <p className="text-red-500">Blog not found!</p>
      )}
    </div>
  );
};

export default BlogDetails;

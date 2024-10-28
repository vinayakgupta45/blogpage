import React from "react";
import { Link } from "react-router-dom";

function BlogList({ blogs, removeBlog, updateBlog }) {
  const handleUpdate = (id) => {
    const updatedTitle = prompt("Enter new title:");
    const updatedContent = prompt("Enter new content:");
    updateBlog({ id, title: updatedTitle, content: updatedContent });
  };

  return (
    <div>
      <h2>Blog List</h2>
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              <button onClick={() => handleUpdate(blog.id)}>Update</button>
              <button onClick={() => removeBlog(blog.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogList;

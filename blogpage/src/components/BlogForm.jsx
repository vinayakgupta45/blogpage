import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // const saveToLocalStorage = (title, content) => {
  //   const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
  //   const newBlog = { id: Date.now(), title, content }; 
  //   localStorage.setItem('blogs', JSON.stringify([...existingBlogs, newBlog]));
  // };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addBlog({ title, content });
      saveToLocalStorage(title, content);

      navigate("/");
    } else {
      alert("Both fields are required");
    }
  };
  

  return (
    <div>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;

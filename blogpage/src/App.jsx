import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetail from "./components/BlogDetail";

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", content: "This is the first blog content." },
    { id: 2, title: "Second Blog", content: "This is the second blog content." },
  ]);

  
  const addBlog = (newBlog) => {
    setBlogs([...blogs, { id: Date.now(), ...newBlog }]);
  };

  
  const updateBlog = (updatedBlog) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      )
    );
  };


  const removeBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>My Blogs</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add Blog</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <BlogList
                blogs={blogs}
                removeBlog={removeBlog}
                updateBlog={updateBlog}
              />
            }
          />
          <Route path="/add" element={<BlogForm addBlog={addBlog} />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

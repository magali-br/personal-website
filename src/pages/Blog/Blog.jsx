import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogFiles from "../../blogFiles.json";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogList = async () => {
      const blogs = blogFiles.map(async (file) => {
        let filename = file.replaceAll(".md", "");
        let slug = filename.replaceAll(" ", "-");
        setLoading(false);
        return { filename, slug };
      });
      setBlogs(await Promise.all(blogs));
    };

    loadBlogList();
  }, []);

  return (
    <div className="Container Blog">
      <h1 className="Subtitle">Blog entries</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="BlogTitleList">
          <ul>
            {blogs.map((blog, index) => (
              <li key={index} className="BlogTitle Bold">
                <Link to={`/blog/${blog.slug}`}>{blog.filename}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Blog;

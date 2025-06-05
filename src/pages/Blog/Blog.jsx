import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogFiles from "../../blogFiles.json";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const contentPromises = blogFiles.map(async (file) => {
          const contentResponse = await fetch(`/md/blog/${file}`);
          const content = await contentResponse.text();
          let slug = file.replaceAll(".md", "");
          slug = slug.replaceAll(" ", "-");
          return { content, filename: file, slug };
        });
        const markdownContents = await Promise.all(contentPromises);

        setBlogs(markdownContents);
        setLoading(false);
      } catch (error) {
        console.error("Error loading blogs:", error.message);
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="Container Blog">
      <h2 className="Subtitle">Blog entries</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="BlogTitleList">
          <ul>
            {blogs.map((blog, index) => (
              <li key={index} className="BlogTitle Bold">
                <Link to={`/blog/${blog.slug}`}>
                  {blog.filename.replace(".md", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Blog;

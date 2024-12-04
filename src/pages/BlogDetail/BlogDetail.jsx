import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../../MarkdownRenderer";
import blogFiles from "../../blogFiles.json";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const filename = blogFiles.find((file) => {
          const slug = file.replaceAll(".md", "").replaceAll(" ", "-");
          return slug === id;
        });

        if (filename) {
          const contentResponse = await fetch(`/md/${filename}`);
          const content = await contentResponse.text();
          setBlog({ content, filename, slug: id });
        }
      } catch (error) {
        console.error("Error loading blog:", error.message);
      }
    };

    loadBlog();
  }, [id]);

  if (!blog) {
    return <p></p>;
  }

  return (
    <div className="Container BlogDetail">
      <h2 className="Subtitle">{blog.filename.replace(".md", "")}</h2>
      <MarkdownRenderer content={blog.content} />
    </div>
  );
};

export default BlogDetail;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogFiles from "../blogFiles.json";

interface BlogEntry {
  filename: string;
  slug: string;
}

export const Blog = () => {
  // 2. Explicitly type the state
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadBlogList = async (): Promise<void> => {
      const blogPromises = (blogFiles as string[]).map(async (file) => {
        const filename = file.replace(".md", "");
        const slug = filename.replaceAll(" ", "-");
        return { filename, slug };
      });

      const resolvedBlogs = await Promise.all(blogPromises);
      setBlogs(resolvedBlogs);
      setLoading(false);
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

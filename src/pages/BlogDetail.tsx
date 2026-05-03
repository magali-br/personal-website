import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MarkdownRenderer from "../MarkdownRenderer";
import blogFiles from "../blogFiles.json";

// 1. Define the shape of our Blog state
interface BlogData {
  content: string;
  filename: string;
  slug: string;
}

export const BlogDetail = () => {
  // 2. useParams often returns undefined, so we type it as a string
  const { id } = useParams<{ id: string }>();

  // 3. Initialize state as null but tell TS it can hold BlogData
  const [blog, setBlog] = useState<BlogData | null>(null);

  useEffect(() => {
    const loadBlog = async (): Promise<void> => {
      try {
        // Cast blogFiles if TS isn't sure it's an array of strings
        const filename = (blogFiles as string[]).find((file) => {
          const slug = file.replaceAll(".md", "").replaceAll(" ", "-");
          return slug === id;
        });

        if (filename && id) {
          const contentResponse = await fetch(`/md/blog/${filename}`);

          if (!contentResponse.ok) {
            throw new Error("Failed to fetch blog content");
          }

          const content = await contentResponse.text();
          setBlog({ content, filename, slug: id });
        }
      } catch (error) {
        // Check if error is an actual Error object to access .message safely
        if (error instanceof Error) {
          console.error("Error loading blog:", error.message);
        }
      }
    };

    loadBlog();
  }, [id]);

  // Handle the loading/empty state
  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Container BlogDetail">
      {/* 4. blog is guaranteed to be non-null here thanks to the guard above */}
      <h1 className="Subtitle">{blog.filename.replace(".md", "")}</h1>
      <MarkdownRenderer content={blog.content} />
    </div>
  );
};

import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
};

export default function PostList() {
  const posts = getPosts();

  return (
    <div className="text-left">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Latest Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`} className="text-lg text-blue-600 dark:text-blue-400 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "content/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent); // Extract frontmatter

    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Post",
    };
  });
}

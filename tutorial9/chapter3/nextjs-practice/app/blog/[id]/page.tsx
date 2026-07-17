import Image from "next/image";
import RenderedTime from "./RenderedTime";
import { use } from "react";
import CommentsWrapper from "./CommentsWrapper";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

// ★ page.tsx は async にしない
export default function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  // ★ fetch は別コンポーネントに分離
  return <PostDetail id={id} />;
}

// ★ async Server Component は分離して単独で使う
async function PostDetail({ id }: { id: string }) {
  const post: Post = await getPost(id);

  return (
    <div>
      <h1>{post.title}</h1>

      <Image
        src={`https://picsum.photos/seed/${post.id}/800/400`}
        alt={post.title}
        width={800}
        height={400}
      />

      <p>{post.body}</p>

      <CommentsWrapper />
    </div>
  );
}


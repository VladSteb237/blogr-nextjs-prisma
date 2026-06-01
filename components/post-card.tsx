"use client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
//import type { Post } from "@/lib/posts";

export type PostCardData = {
  id: string;
  title: string;
  content: string | null;
  author: {
    name: string | null;
  } | null;
};

export default function PostCard({ post }: { post: PostCardData }) {
  return (
    <div className="post-card">
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="meta">By {post.author?.name ?? "Unknown author"}</p>
      </Link>
      {post.content ? <ReactMarkdown>{post.content}</ReactMarkdown> : null}
    </div>
  );
}

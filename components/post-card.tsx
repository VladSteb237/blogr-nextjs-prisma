"use client";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="post-card">
      <Link href={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p className="meta">By {post.author?.name ?? "Unknown author"}</p>
      </Link>
      <ReactMarkdown>{post.content ?? ""}</ReactMarkdown>
    </div>
  );
}

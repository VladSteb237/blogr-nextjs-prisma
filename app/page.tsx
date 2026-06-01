import PostCard, { PostCardData } from "@/components/post-card";
import prisma from "@/lib/prisma";

export const revalidate = 10;

export default async function FeedPage() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
    orderBy: { id: "desc" },
  });

  //console.log("Feed data IS:", feed);

  return (
    <div className="stack">
      <h1>Public Feed</h1>
      {/* {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
      {feed.length ? (
        feed.map((post: PostCardData) => <PostCard key={post.id} post={post} />)
      ) : (
        <div className="panel">No published posts yet.</div>
      )}
    </div>
  );
}

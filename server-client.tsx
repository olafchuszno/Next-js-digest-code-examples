// ServerPage.tsx (Server Component)
import { LikeButton } from "./LikeButton";

export default async function ServerPage() {
  const post = await db.post.findUnique({ where: { id: "1" } });
  return <LikeButton postId={post.id} title={post.title} />;
}
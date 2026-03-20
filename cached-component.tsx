import { cacheLife } from 'next/cache';

async function BlogPosts() {
  'use cache';
  cacheLife('hours');

  const posts = await db.post.findMany();
  return posts.map((p) => <article key={p.id}>{p.title}</article>);
}
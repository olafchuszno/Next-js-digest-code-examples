// app/post/page.tsx
import { LikeButton } from '@/components'
import { fetchPostById } from '@/lib'

export default async function PostPage({  }) {
  const post = await getPostFromDb() // { title: 'Hello', likes: 12 }

  return (
    <>
      <h1>{post.title}</h1>
      <LikeButton initialLikes={post.likes} />
    </>
  )
}
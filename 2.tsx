// app/ui/counter.tsx
'use client'

import { useEffect, useState } from 'react'

export const LikeButton = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('mounted in browser')
  }, [])

  return <button onClick={() => setCount(count + 1)}>Likes: {count}</button>
}
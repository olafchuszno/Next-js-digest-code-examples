'use client'; // this directive ensures it's a Client Component

import { FC, useEffect, useState } from 'react';

export const LikeButton: FC = () => {
  const [likes, setLikes] = useState(0); 

  // All hooks allowed!
  useEffect(() => {
    console.log('Mounted!');
  }, []);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Likes: {likes}
    </button>
  );
};
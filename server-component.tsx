import type { FC } from 'react';

export const LikeButton: FC = () => {
  // No hooks allowed here! Everything is static.
  return <button className="bordered">Likes: 0</button>;
};

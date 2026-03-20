// blog-post/error.tsx

'use client';

import { startTransition } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div >
      <div >Error message: {error?.message}</div>
      <button
        onClick={() =>
          startTransition(() => {
            router.refresh();
            reset();
          })
        }
      >
        Reset the error
      </button>
    </div>
  );
}

// action.ts
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  await db.post.create({ data: { title } });
}

// page.tsx
import { createPost } from "./action";

export default function Page() {
  return (
    <form action={createPost}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
// app/users/page.tsx
import { db } from '@/lib/db'

// Notice the `async` keyword in the component
export default async function UsersPage() {
  // This function call will run on the server
  const users = await db.user.findMany()

  return (
    <ul>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}
    </ul>
  )
}
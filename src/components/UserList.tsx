'use client';
import { useUsers } from '@/hooks/useUsers';
import Link from 'next/link';

export default function UserList() {
  const { data: users, loading, error } = useUsers();

  if (loading) return <div>Loading users...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <ul className="divide-y divide-gray-200">
        {users.map(user => (
          <li key={user.id} className="py-2">
            <Link href={`/users/${user.id}`} className="hover:text-blue-600">
              {user.name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
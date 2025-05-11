'use client'; // Must be the very first line

import { useUsers } from '@/hooks/useUsers';
import Link from 'next/link';
import { SkeletonLoader } from '@/components/SkeletonLoader';


export default function UsersPage() {
  const { data: users, loading, error } = useUsers();

  if (loading) return <div className="p-4 max-w-4xl mx-auto space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="p-4 border rounded-lg">
        <div className="h-6 bg-gray-200 rounded-full w-1/2 mb-3 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
      </div>
    ))}
  </div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="space-y-3">
        <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Homepage
      </Link>
        {users?.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg hover:bg-gray-50">
            <Link 
              href={`/users/${user.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              {user.name}
            </Link>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
'use client';

import { useUsers } from '@/hooks/useUsers';
import Link from 'next/link';
import { SkeletonLoader } from '@/components/SkeletonLoader';

export default function UsersPage() {
  const { data: users, loading, error } = useUsers();

  if (loading) return (
     <div className="p-4 max-w-4xl mx-auto space-y-4">
      {[...Array(5)].map((_, i) => (
        <SkeletonLoader key={i} lines={2} className="h-12" />
      ))}
    </div>
  );

  if (error) return (
    <div className="p-4 text-red-500">
      Error loading users: {error.message}
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="space-y-3">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
        {users?.map((user) => (
          
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50"
          >
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
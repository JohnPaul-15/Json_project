// 'use client' directive at the top
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
    <div className="bg-white min-h-screen p-4 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Users</h1>
        <p className="text-gray-500 mt-2">Manage and view all users</p>
      </header>

      {/* User List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {users?.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-medium text-gray-800">{user.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{user.email}</p>
          </Link>
        ))}
      </div>

      {/* Back to Dashboard Link */}
      <div className="text-center mt-6">
        <Link
          href="/"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

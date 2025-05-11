'use client'; // Must be the very first line

import { useUsers } from '@/hooks/useUsers';
import Link from 'next/link';
import { SkeletonLoader } from '@/components/SkeletonLoader';


export default function UsersPage() {
  const { data: users, loading, error } = useUsers();

<<<<<<< HEAD
  if (loading) return <div className="p-4 max-w-4xl mx-auto space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="p-4 border rounded-lg">
        <div className="h-6 bg-gray-200 rounded-full w-1/2 mb-3 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
      </div>
    ))}
  </div>;
  if (error) return <div>Error loading users: {error.message}</div>;
=======
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg">
        Error loading users: {error.message}
      </div>
    );
  }
>>>>>>> 1afd69270803731b117173ad4783cb645b438464

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">All Users</h1>
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Homepage
          </Link>
        </div>

        <ul className="space-y-4">
          {users?.map((user) => (
            <li
              key={user.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={`https://i.pravatar.cc/100?u=${user.id}`} // Unique avatar per user
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <Link
                  href={`/users/${user.id}`}
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {user.name}
                </Link>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

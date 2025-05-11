'use client';

import { useUser } from '@/hooks/useUser';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

// Modern approach with React.use()
export default function UserProfile({ params }: { params: Promise<{ userId: string }> }) {
  // Unwrap the params promise
  const resolvedParams = React.use(params);
  const userId = parseInt(resolvedParams.userId, 10);

  if (isNaN(userId)) notFound();

  const { data: user, loading, error } = useUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return (
    <div className="text-red-500 p-4">
      <p>Error: {error.message}</p>
      <Link href="/users" className="text-blue-600 hover:underline">
        ← Back to Users
      </Link>
    </div>
  );
  
  if (!user) notFound();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link href="/users" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Users List
      </Link>
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="mt-2"><span className="font-medium">Email:</span> {user.email}</p>
      {user.phone && <p><span className="font-medium">Phone:</span> {user.phone}</p>}
    </div>
  );
}

// Backward-compatible version (works today but may need updating later)
// export default function UserProfile({ params }: { params: { userId: string } }) {
//   const userId = parseInt(params.userId, 10);
//   // ... rest of the component remains the same
// }
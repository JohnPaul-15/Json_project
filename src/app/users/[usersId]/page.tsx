// src/app/users/[userId]/page.tsx
'use client';

import { useUser } from '@/hooks/useUser';

export default function UserProfile({ params }: { params: { userId: string } }) {
  // Safely convert to number with validation
  const userId = Number.isNaN(Number(params.userId)) ? -1 : Number(params.userId);
  
  const { data: user, loading, error } = useUser(userId);

  if (loading) return <div>Loading user data...</div>;
  
  if (error) return (
    <div className="text-red-500 p-4">
      <p>Error: {error}</p>
      <p className="text-sm">User ID: {userId}</p>
    </div>
  );

  if (!user) return <div>No user data found for ID: {userId}</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <div className="mt-4 space-y-2">
        <p><span className="font-medium">Email:</span> {user.email}</p>
        {user.phone && <p><span className="font-medium">Phone:</span> {user.phone}</p>}
      </div>
    </div>
  );
}
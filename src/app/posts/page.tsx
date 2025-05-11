'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PostsPage() {
  const router = useRouter();
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

  if (isLoading) return <div className="p-4">Loading posts...</div>;
  if (error) return <div className="p-4 text-red-500">Error loading posts</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="space-y-3">
        {posts?.map((post: any) => (
          <div 
            key={post.id} 
            onClick={() => router.push(`/posts/${post.id}`)}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <h2 className="font-medium">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
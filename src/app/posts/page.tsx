'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Post } from '@/types';

export default function PostsPage() {
  const router = useRouter();
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

  if (isLoading) return (
    
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-4 border rounded-lg animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      ))}
    </div>
  );

  if (error) return (
    <div className="p-4 text-red-500">
      Error loading posts: {error.message}
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      <div className="space-y-4">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Dashboard
      </Link>
        {posts?.map((post) => (
          <div 
            key={post.id} 
            onClick={() => router.push(`/posts/${post.id}`)}
            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <h2 className="font-medium">{post.title}</h2>
            <p className="text-gray-600 mt-1 line-clamp-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
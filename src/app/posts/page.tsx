'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Post } from '@/types';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import BackToTopButton from '@/components/BackToTopButton';

export default function PostsPage() {
  const router = useRouter();
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
  });

  if (isLoading)
    return (
      <div className="p-4 max-w-6xl mx-auto space-y-4">
        <SkeletonLoader lines={3} className="h-16" />
        <SkeletonLoader lines={3} className="h-16" />
        <SkeletonLoader lines={3} className="h-16" />
      </div>
    );

  if (error)
    return (
      <div className="p-4 text-red-500 max-w-6xl mx-auto">
        Error loading posts: {error.message}
      </div>
    );

  return (
    <div className="bg-white min-h-screen p-4 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Posts</h1>
        <p className="text-gray-500 mt-2">Stay updated with the latest posts and articles</p>
      </header>

       {/* Back to Dashboard Link */}
      <div className="text-left mt-6">
        <Link href="/" className="text-blue-600 hover:underline text-sm font-medium">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts?.map(post => (
          <div
            key={post.id}
            onClick={() => router.push(`/posts/${post.id}`)}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h2 className="font-semibold text-xl text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Back to Dashboard Link */}
      <div className="text-center mt-6">
        <Link href="/" className="text-blue-600 hover:underline text-sm font-medium">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

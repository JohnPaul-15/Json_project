'use client';

import { useQuery } from '@tanstack/react-query';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import type { Post, Comment } from '@/types';
import { SkeletonLoader } from '@/components/SkeletonLoader';

export default function PostPage() {
  const params = useParams();
  const postId = Number(params.postId);

  // Validate postId
  if (isNaN(postId)) {
    return notFound();
  }

  const { data: post, isLoading: postLoading, error: postError } = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => {
        if (!res.ok) throw new Error('Failed to fetch post');
        return res.json();
      })
  });

  const { data: comments, isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: ['comments', postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => {
        if (!res.ok) throw new Error('Failed to fetch comments');
        return res.json();
      }),
    enabled: !!post
  });

  if (postLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <SkeletonLoader lines={1} className="h-6 w-32" />
        </div>
        <div className="space-y-4">
          <SkeletonLoader lines={1} className="h-8 w-3/4" />
          <SkeletonLoader lines={3} className="h-4" />
        </div>
      </div>
    );
  }

  if (postError || !post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back button with improved styling */}
      <Link 
        href="/posts" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Posts
      </Link>

      {/* Post content with better typography */}
      <article className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">{post.body}</p>
        </div>
      </article>

      {/* Comments section with improved styling */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Comments ({comments?.length || 0})
        </h2>
        
        {commentsLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <SkeletonLoader lines={1} className="h-5 w-1/4" />
                <SkeletonLoader lines={2} className="h-4 mt-2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {comments?.map((comment) => (
              <div key={comment.id} className="p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {comment.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{comment.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{comment.email}</p>
                    <p className="mt-3 text-gray-700">{comment.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
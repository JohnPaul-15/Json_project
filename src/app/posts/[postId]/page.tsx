'use client';

import { useQuery } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import type { Post, Comment } from '@/types';
import { SkeletonLoader } from '@/components/SkeletonLoader';

// Main content component
function PostContent({ postId }: { postId: number }) {
  const { data: post, isLoading: postLoading } = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json())
  });

  const { data: comments, isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: ['comments', postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json())
  });

  if (postLoading) return  <div className="p-4 max-w-2xl mx-auto">
      <SkeletonLoader lines={4} />
    </div>
  if (!post) notFound();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link href="/posts" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Posts
      </Link>
      
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
      
      <h2 className="text-xl font-semibold mt-8 mb-4">Comments</h2>
      {commentsLoading ? (
        <div>Loading comments...</div>
      ) : (
        <div className="space-y-4">
          {comments?.map((comment) => (
            <div key={comment.id} className="p-4 border rounded-lg">
              <p className="font-medium">{comment.name}</p>
              <p className="text-gray-600">{comment.body}</p>
              <p className="text-sm text-gray-400">{comment.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Future-compatible wrapper
function PostPageWrapper({ paramsPromise }: { paramsPromise: Promise<{ postId: string }> }) {
  const params = React.use(paramsPromise);
  const postId = parseInt(params.postId);
  
  if (isNaN(postId)) notFound();

  return <PostContent postId={postId} />;
}

// Current implementation (will work today)
export default function PostPage({ params }: { params: { postId: string } }) {
  // Temporary workaround - remove when Next.js enforces the new behavior
  return <PostPageWrapper paramsPromise={Promise.resolve(params)} />;
}
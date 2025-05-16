// src/hooks/useTotals.ts
'use client';

import { useQuery } from '@tanstack/react-query';

export function useTotals() {
  const usersQuery = useQuery({
    queryKey: ['total-users'],
    queryFn: () => 
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  });

  const postsQuery = useQuery({
    queryKey: ['total-posts'],
    queryFn: () => 
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  });

  const commentsQuery = useQuery({
    queryKey: ['total-comments'],
    queryFn: () => 
      fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
  });

  return {
    users: usersQuery.data?.length || 0,
    posts: postsQuery.data?.length || 0,
    comments: commentsQuery.data?.length || 0,
    isLoading: usersQuery.isLoading || postsQuery.isLoading || commentsQuery.isLoading,
    error: usersQuery.error || postsQuery.error || commentsQuery.error
  };
}
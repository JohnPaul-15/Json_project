// src/services/api.ts
import type { Post, Comment } from '@/types';
import { 
  fetchUser as mockFetchUser, 
  fetchUsers as mockFetchUsers 
} from './mockApi';
import { 
  fetchUser as realFetchUser, 
  fetchUsers as realFetchUsers 
} from './realApi';

const USE_MOCK_API = true; // Change to false for real API

// Single user fetch
export const fetchUser = (userId: number) => {
  return USE_MOCK_API ? mockFetchUser(userId) : realFetchUser(userId);
};

// Multiple users fetch (ADD THIS)
export const fetchUsers = () => {
  return USE_MOCK_API ? mockFetchUsers() : realFetchUsers();
};

// services/api.ts
export const fetchPost = async (id: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
};

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  if (!res.ok) throw new Error('Failed to fetch comments');
  return res.json();
};
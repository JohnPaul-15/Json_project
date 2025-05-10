// src/services/realApi.ts
import axios from 'axios';
import type { User } from '@/types';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000
});

export const fetchUser = async (id: number): Promise<User> => {
  const response = await API.get(`/users/${id}`);
  return response.data;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await API.get('/users');
  return response.data;
};
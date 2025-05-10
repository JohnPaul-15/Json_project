// src/services/api.ts
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
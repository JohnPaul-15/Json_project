// src/hooks/useUsers.ts
import { useState, useEffect } from 'react';
import { fetchUsers } from '@/services/api';
import type { User } from '@/types';

export function useUsers() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Fetching users...'); // Debug
        const users = await fetchUsers();
        console.log('Received users:', users); // Debug
        setData(users);
        setError(null);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to load users');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
}
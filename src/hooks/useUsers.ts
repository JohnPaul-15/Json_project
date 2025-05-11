// src/hooks/useUsers.ts
'use client';

import { useState, useEffect } from 'react';
import { fetchUsers } from '@/services/api';
import type { User } from '@/types';

export function useUsers() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Changed to Error type

  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await fetchUsers();
        setData(users);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch users'));
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
}
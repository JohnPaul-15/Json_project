// src/hooks/useUser.ts
'use client';

import { useState, useEffect } from 'react';
import { fetchUser } from '@/services/api';
import type { User } from '@/types';

export function useUser(userId: number) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Changed from string to Error

  useEffect(() => {
    const loadData = async () => {
      try {
        const user = await fetchUser(userId);
        setData(user);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user')); // Ensure it's always an Error
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userId]);

  return { data, loading, error } as const;
}
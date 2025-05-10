// src/hooks/useUser.ts
import { useState, useEffect } from 'react'; // Add this import
import { fetchUser } from '@/services/api';
import type { User } from '@/types';

export function useUser(userId: number) {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userData = await fetchUser(userId);
        setData(userData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [userId]);

  return { data, loading, error };
}
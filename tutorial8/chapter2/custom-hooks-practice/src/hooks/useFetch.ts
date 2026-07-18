import { useState, useEffect, useCallback } from 'react';

// フックの戻り値の型定義
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
    error: Error | null;
      refetch: () => void; // 再取得関数を追加
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

 
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json() as T;
            setData(json);
        } catch (e) {
            setError(e instanceof Error ? e : new Error('Unknown error'));
        } finally {
            setLoading(false);
        }
    }, [url]);

 useEffect(() => {
    fetchData();
  }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

  return { data, loading, error, refetch };
}
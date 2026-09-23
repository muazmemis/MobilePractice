import { useEffect, useState } from 'react';

type FetcherResponse<T> = {
  data: T | null;
};

type UseFetchOptions = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
};

const useFetcher = <T>({ url, method = 'GET', headers, body }: UseFetchOptions): FetcherResponse<T> => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method, headers, body });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url, method, headers, body]);

  return { data };
};

export default useFetcher;

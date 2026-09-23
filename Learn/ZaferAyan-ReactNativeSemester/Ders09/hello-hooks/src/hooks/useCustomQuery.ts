import { useQuery } from '@tanstack/react-query';

export const useCustomQuery = <T>(
  { queryKey }: { queryKey: string[] },
  API_URL: string,
  params?: string
) => {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const response = await fetch(params ? `${API_URL}${params}` : API_URL);
      return response.json();
    },
  });
};

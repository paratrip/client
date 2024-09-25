import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export function useFetchQuery({
  url,
  queryKey,
  type = 'GET',
}: {
  url: string;
  queryKey: string[];
  type?: 'GET' | 'POST';
}) {
  const accessToken = localStorage.getItem('accessToken');

  const fetchHandler = async (data: any) => {
    if (type === 'GET') {
      try {
        const response = axios.get(url);
        return (await response).data;
      } catch (error) {
        console.log(error);
      }
    }

    if (type === 'POST') {
      const response = axios.post(url, {
        data: {
          ...data,
          accessToken,
        },
      });
      return (await response).data;
    }
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [...queryKey],
    queryFn: fetchHandler,
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
}

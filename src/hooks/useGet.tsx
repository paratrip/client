import { useQuery } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

type UseGet = {
  queryKey: string[];
  url: string;
};

export function useGet<T>({ queryKey, url }: UseGet) {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<T>({
    queryKey: [...queryKey],
    queryFn: async () => {
      const response: AxiosResponse<T> = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    },
  });
}

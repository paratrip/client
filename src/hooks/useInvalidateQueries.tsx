import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@services/react-query';

type UseMutate = {
  url: string;
  method: 'GET' | 'POST' | 'PUT';
  queryKey: string[];
  data: any;
};

export const useMutate = ({
  url = '',
  method = 'GET',
  data,
  queryKey = [],
}: UseMutate) => {
  const token = localStorage.getItem('accessToken');

  const { mutate } = useMutation({
    mutationFn: () => mutateHandler(),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...queryKey],
      });
    },

    onError: error => {
      console.log('useMutate ERROR:', error);
    },
  });

  async function mutateHandler() {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: {
          ...data,
        },
      });
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return [mutate];
};

import { useMutation } from '@tanstack/react-query';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { queryClient } from '@services/react-query';

type MutationConfig = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  queryKey?: string[];
  errorMessage: string;
};

export function useMutate<
  TData = unknown,
  TError = unknown,
  TVariables = unknown
>({ url, method, queryKey, errorMessage }: MutationConfig) {
  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn: (variables: TVariables) =>
      axios({
        url,
        method,
        data: variables,
      } as AxiosRequestConfig).then(
        (response: AxiosResponse<TData>) => response.data
      ),
    onSuccess: () => {
      if (queryKey) {
        queryClient.invalidateQueries({ queryKey });
      }
    },
  });

  const getMutateMessage = () => {
    if (mutation.isError) return errorMessage;
    return null;
  };

  return {
    ...mutation,
    mutate: mutation.mutate,
    useMutateMessage: getMutateMessage(),
  };
}

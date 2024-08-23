import axios, { AxiosResponse } from 'axios';

import { useState } from 'react';

type fetchHandlerParameter<T> = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: T;
};

// T: Data

export function useFetch<T, U>() {
  const [fetchData, setFetchData] = useState<T>();

  async function fetchHandler({
    url,
    method,
    data,
  }: fetchHandlerParameter<T>): Promise<void> {
    try {
      const response = await axios<T>(url, {
        method,
        data: { ...data },
      });

      setFetchData(response as T);
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error);
      }
    }
  }

  return [fetchData, fetchHandler];
}

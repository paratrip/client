import axios from 'axios';
import { useState } from 'react';
import { Response } from '@utils/types/response';

export type fetchHandlerParameter<T> = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: T;
};

// T: 요청 데이터
// U: 응답 데이터
export function useFetch<T, U>() {
  const [fetchData, setFetchData] = useState<Response<U>>();

  async function fetchHandler({
    url,
    method,
    data,
  }: fetchHandlerParameter<T>): Promise<Response<U>> {
    try {
      const response = await axios<Response<U>>(url, {
        method,
        data: { ...data },
      });

      if (response.data) {
        setFetchData(response.data);
      }

      // response.data가 바로 필요한 경우,
      return response.data;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error);
      }
      throw error;
    }
  }

  return [fetchData, fetchHandler] as const;
}

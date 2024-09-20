import axios from 'axios';
import { useState } from 'react';
import { Response } from '@utils/types/response';

export type fetchHandlerParameter<T> = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: T;
};

export function useFetch<T, U>(addInterceptor: boolean = false) {
  if (addInterceptor) {
    axios.interceptors.request.use(config => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

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

      return response.data;
    } catch (error) {
      if (typeof error === 'string') {
        throw new Error(error);
      }
      throw error;
    }
  }

  return fetchHandler;
}

import { useState } from 'react';
import { useFetch } from './use-fetch';

export type User = {
  id?: string;
  name: string;
  email: string;
  birthDate: string;
  phone: string;
};

type UsersPagination = {
  totalPage: string;
  users: User[];
};

type useUserResponse = {
  currentPage: string;
  totalPages: string;
  users: User[];
  setCurrentPage: (currentPage: string) => void;
  setLimit: (currentPage: string) => void;
};

function paramsToString(limit?: string, currentPage?: string) {
  let params = {};

  if (limit) {
    params = { ...params, limit };
  }

  if (currentPage) {
    params = { ...params, page: Number(currentPage) };
  }

  return params;
}

export const useUsers = (): useUserResponse => {
  const [currentPage, setCurrentPage] = useState('1');
  const [limit, setLimit] = useState('4');

  const params = new URLSearchParams(paramsToString(limit, currentPage));

  const { response } = useFetch<UsersPagination>(`users?${params}`);

  const users = response?.users || [];

  return {
    currentPage,
    totalPages: response?.totalPage || '',
    users,
    setCurrentPage,
    setLimit,
  };
};

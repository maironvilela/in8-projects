import { useEffect, useState } from 'react';
import api from '../services/api';

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fecheData = async () => {
      try {
        const response = await api.get(url);
        setResponse(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fecheData();
  }, [url]);

  return { response, error };
};

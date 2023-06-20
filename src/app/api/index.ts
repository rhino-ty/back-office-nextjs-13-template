// fetch_instance

import { getAccessTokenFromLocalStorage } from '@/utils/acces_token_handler';

const SERVER_URL: string = process.env.NEXT_PUBLIC_SERVER_URL || '';

interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}

const createHeaders = (): Headers => {
  const headers = new Headers();
  const accessToken = getAccessTokenFromLocalStorage();
  headers.append('Authorization', `Bearer ${accessToken}`);
  return headers;
};

const fetchInstance = async <T>(
  url: string,
  options?: FetchOptions
): Promise<T | null> => {
  const headers = createHeaders();
  const fetchOptions: FetchOptions = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${SERVER_URL}${url}`, fetchOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchInstance;

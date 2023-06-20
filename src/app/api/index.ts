// fetch_instance
// fetch를 이용해 API 작성을 보다 쉽고, 간편하게 만듦. 기본적인
// url만 있으면 데이터가 return 되게!

import { getAccessTokenFromLocalStorage } from '@/utils/acces_token_handler';

export const SERVER_URL: string = process.env.NEXT_PUBLIC_SERVER_URL || '';

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

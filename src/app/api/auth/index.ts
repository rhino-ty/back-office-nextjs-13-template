'use client';
import { saveAccessTokenToLocalStorage } from '@/utils/acces_token_handler';
import fetchInstance from '../index';

interface LoginResponse {
  token: string;
}

export const handleLoginSubmit = async (email: string, password: string) => {
  try {
    const response = await fetchInstance<LoginResponse>('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    // 로그인 요청 성공
    console.log(response);
    if (response) {
      saveAccessTokenToLocalStorage(response.token);
      alert('성공!');
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    // 로그인 요청 실패
    console.error(error);
  }
};

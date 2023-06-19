'use client';
import { saveAccessTokenToLocalStorage } from '@/utils/acces_token_handler';
import instance from '../axios_module';

export const handleLoginSubmit = async (email: string, password: string) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });

    // 로그인 요청 성공
    console.log(response.data);
    saveAccessTokenToLocalStorage(response.data.token);
  } catch (error) {
    // 로그인 요청 실패
    console.error(error);
  }
};

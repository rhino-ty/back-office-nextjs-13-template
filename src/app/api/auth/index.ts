'use client';

import instance from '../axiosModule';

export const handleLoginSubmit = async (email: string, password: string) => {
  try {
    const response = await instance.post('/login', {
      email,
      password,
    });

    // 로그인 요청 성공
    console.log(response.data);
  } catch (error) {
    // 로그인 요청 실패
    console.error(error);
  }
};

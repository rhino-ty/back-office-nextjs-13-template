import { saveAccessTokenToLocalStorage } from '@/utils/acces_token_handler';
import { SERVER_URL } from '../';

export const handleLoginSubmit = async (email: string, password: string) => {
  try {
    const response = await fetch(`${SERVER_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      saveAccessTokenToLocalStorage(data.token);
      alert('성공!');
    } else {
      throw new Error('로그인 요청 실패');
    }
  } catch (error) {
    console.error(error);
  }
};

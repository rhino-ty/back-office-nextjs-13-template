export const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('refresh_token', refreshToken);
  }
};

export const getRefreshTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('refresh_token') || '';
  }
};

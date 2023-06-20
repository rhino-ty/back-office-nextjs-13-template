import { SERVER_URL } from '../';

export const handlePageLoad = async (page: number) => {
  try {
    const response = await fetch(`${SERVER_URL}/users?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

'use client';
import instance from '../axios_module';

export const handlePageLoad = async (page: number) => {
  try {
    const response = await instance.get(`/users?page=${page}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

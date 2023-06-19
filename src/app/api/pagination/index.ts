'use client';
import { PageData } from '@/types/pagination';
import instance from '../axios_module';

export const handlePageLoad = async (
  page: number
): Promise<PageData | null> => {
  try {
    const response = await instance.get(`/users?page=${page}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

'use client';
import React, { useEffect, useState } from 'react';
import { handlePageLoad } from '../api/pagenation';

// 응답 데이터의 타입 정의
interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface UserListData extends Array<UserData> {}

export default function Pagenation() {
  const [data, setData] = useState<UserListData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await handlePageLoad(0); // 페이지 번호를 변경하여 원하는 페이지의 데이터를 가져올 수 있음
      setData(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      {data ? (
        <div>
          {/* 데이터를 사용하여 View에 필요한 내용을 배치하는 로직을 작성. */}
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                {user.first_name} {user.last_name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

'use client';
import React, { useEffect, useState } from 'react';
import { handlePageLoad } from '../api/pagination';
import Image from 'next/image';

// 응답 데이터의 타입 정의
interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
interface UserListData extends Array<UserData> {}

export default function Pagination() {
  // reqres.in/ : 6개씩, 3페이지까지 있다(index로는 2)

  const [page, setPage] = useState(1); // 처음 페이지는 1
  const [data, setData] = useState<UserListData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await handlePageLoad(page - 1); // 페이지 번호를 변경하여 원하는 페이지의 데이터를 가져올 수 있음
      setData(response.data);
    };

    fetchData();
  }, [page]);

  return (
    <div className=''>
      {data ? (
        <div>
          {/* 데이터를 사용하여 View에 필요한 내용을 배치하는 로직을 작성. */}
          <ul>
            {data.map((user) => (
              <li key={user.id} className='my-3'>
                <div className='flex justify-between items-center mx-56'>
                  <span className='mr-2'>
                    {user.first_name} {user.last_name}
                  </span>
                  <Image
                    alt='avatar_image'
                    src={user.avatar}
                    width={100}
                    height={100}
                  ></Image>
                </div>
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

// https://reqres.in/api/users API 명세서
// {
//   "page": 1,
//   "per_page": 6,
//   "total": 12,
//   "total_pages": 2,
//   "data": [
//       {
//           "id": 1,
//           "email": "george.bluth@reqres.in",
//           "first_name": "George",
//           "last_name": "Bluth",
//           "avatar": "https://reqres.in/img/faces/1-image.jpg"
//       },
//       {
//           "id": 2,
//           "email": "janet.weaver@reqres.in",
//           "first_name": "Janet",
//           "last_name": "Weaver",
//           "avatar": "https://reqres.in/img/faces/2-image.jpg"
//       },
//       {
//           "id": 3,
//           "email": "emma.wong@reqres.in",
//           "first_name": "Emma",
//           "last_name": "Wong",
//           "avatar": "https://reqres.in/img/faces/3-image.jpg"
//       },
//       {
//           "id": 4,
//           "email": "eve.holt@reqres.in",
//           "first_name": "Eve",
//           "last_name": "Holt",
//           "avatar": "https://reqres.in/img/faces/4-image.jpg"
//       },
//       {
//           "id": 5,
//           "email": "charles.morris@reqres.in",
//           "first_name": "Charles",
//           "last_name": "Morris",
//           "avatar": "https://reqres.in/img/faces/5-image.jpg"
//       },
//       {
//           "id": 6,
//           "email": "tracey.ramos@reqres.in",
//           "first_name": "Tracey",
//           "last_name": "Ramos",
//           "avatar": "https://reqres.in/img/faces/6-image.jpg"
//       }
//   ],
//   "support": {
//       "url": "https://reqres.in/#support-heading",
//       "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//   }
// }

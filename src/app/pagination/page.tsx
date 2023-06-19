'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { handlePageLoad } from '../api/pagination';
import Image from 'next/image';
import { UserData } from '@/types/pagination';
import Pagination from '@mui/material/Pagination';

export default function ListWithPagination() {
  // reqres.in/ : 6개씩, 2페이지까지 있다(index로는 1)
  // TODO: 새로고침했을 때 페이지 유지

  const [page, setPage] = useState<number>(1); // 처음 페이지는 1
  const [loadedData, setLoadedData] = useState<UserData[] | null>(null);
  const [lastPages, setLastPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  // 1번째 렌더링과 page가 바뀌면 렌더링
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await handlePageLoad(page); // 페이지 번호를 변경하여 원하는 페이지의 데이터를 가져올 수 있음
      if (response) {
        setLoadedData(response.data);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  // 만약 전체 데이터 량을 가지고 계산해야한다면?
  // const lastPages =
  //   dummydata.length % 6 === 0
  //     ? parseInt(dummydata.length / 6)
  //     : parseInt(dummydata.length / 6) + 1; // 마지막 페이지

  const handlePage = (e: ChangeEvent<unknown>) => {
    const nowPageInt = parseInt((e.target as HTMLLIElement).innerText);
    setPage(nowPageInt);
  };

  return (
    <div className='w-[100vw] min-h-[95vh] flex flex-col justify-center items-center'>
      {!loading && loadedData ? (
        <div className='w-full'>
          {/* 데이터를 사용하여 View에 필요한 내용을 배치하는 로직을 작성. */}
          {loadedData.length !== 0 ? (
            <ul>
              {loadedData.map((user) => (
                <li key={user.id} className='my-3'>
                  <div className='flex justify-between items-center mx-56'>
                    <span>
                      {user.first_name} {user.last_name}
                    </span>
                    <span>{user.email}</span>
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
          ) : (
            <div className='flex justify-center items-center text-4xl'>
              데이터가 없습니다!
            </div>
          )}
        </div>
      ) : (
        <div className='flex justify-center items-center text-4xl '>
          Loading...
        </div>
      )}
      <div className=' mt-5'>
        <Pagination
          // count={lastPages}
          count={10}
          defaultPage={1}
          boundaryCount={2}
          color='primary'
          size='large'
          sx={{ margin: 2, display: 'flex', justifyContent: 'center' }}
          onChange={(e) => handlePage(e)}
        />
      </div>
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

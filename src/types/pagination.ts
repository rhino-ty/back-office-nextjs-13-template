// 응답 데이터의 유저데이터 타입 정의
export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UserListData {
  data: UserData[];
}

// 전체 응답데이터 타입 정의
export interface PageData extends UserListData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
}

// const responseData: UserListData = {
//   data: [
//     { id: 1, email: 'user1@example.com', first_name: 'John', last_name: 'Doe', avatar: 'avatar1.jpg' },
//     { id: 2, email: 'user2@example.com', first_name: 'Jane', last_name: 'Smith', avatar: 'avatar2.jpg' },
//     // ...
//   ],
// };

# 리덕스 툴킷

상태관리로 리덕스를 사용함. 추가해 리덕스 툴킷을 사용하여 보일러플레이트 코드를 줄이고, 더 간결하고 명확한 코드를 작성할 수 있음.

## Install

`npm i react-redux next-redux-wrapper @reduxjs/toolkit redux-persist`
`npm i redux-logger --save-dev # 필요한 경우에 설치`

### redux-persist 필요한 이유

모달 관리하며 상태 유지를 통해 새로고침돼도 그대로 유지되어야하기 위함. 관리자 도구에서 자주 다루는 문제임.<br/>
모달 관련 대부분 상태(열리고 닫힘 상태, 입력데이터 상태 등)는 persist로 관리할 예정

### [next-redux-wrapper 필요한 이유](https://simsimjae.medium.com/next-redux-wrapper%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0-5d0176209d14)

리액트 앱에는 리덕스 스토어가 하나임. 하지만 Next 를 사용하는 순간 스토어는 여러 개가 될 수 있는데, Next 는 유저가 요청 할 때마다 리덕스 스토어를 새로 생성.<br />
또한 Next 에서 제공하는 서버사이드 환경에서 리덕스 스토어에 접근하려면 해당 라이브러리가 없이는 불가능.<br/>
만약에 순수 next.js만 사용하고 next-redux-wrapper를 사용하지 않는다면 우리는 getInitialProps등에서 리덕스 스토어에 접근할 수 없기 때문에 그런 경우엔 axios나 fetch등의 api 라이브러리를 사용해야함.

```tsx
// store > index.js

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
// redux-logger:
// log 에 색을 입혀주거나, 리덕스 동작에 대한 것을 자세하고 편하게 log 에서 확인할 수 있도록 만들어진 리덕스 미들웨어

import reducer from './modules';

const makeStore = (context) =>
  configureStore({
    // configureStore: store 를 생성
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger)
    devTools: process.env.NODE_ENV !== 'production',
  });

const wrapper = createWrapper(makeStore, {
  // createWrapper: wrapper 생성, wrapper 에 store 바인딩
  debug: process.env.NODE_ENV !== 'production',
});

export default wrapper;
```

1. `configureStore`: Redux store를 생성하는 함수로, 패키지에서 제공. 설정을 받아 store 생성.
2. `createWrapper`: Redux store와 Next.js를 연결하는 wrapper 생성. `makeStore` 함수와 설정 인자로 사용.
3. `middleware`: 기본 미들웨어 가져온 뒤 `logger` 추가. Redux 동작 로깅에 도움.
4. `devTools`: 개발 환경에서만 Redux DevTools 활성화.
5. `makeStore`: Redux store 생성하는 함수.
6. `wrapper`: `createWrapper`로 생성된 wrapper로 Redux store를 Next.js에서 사용 가능하게 함.

`logger`는 console.log 같은 것으로 선택임.

## 사용처

간단하게 기술하겠음.

### /src/store

auth, modal, scroll 등등 리듀서 작성 및 `/store/index.tsx`에서 스토어 생성 및 redux-persist 설정

### /src/app/modal

구현한 리듀서 활용, Dispatch를 Handler 함수로 구현 후 배치

### /src/redux_provider

persistor 및 redux-provider 배치

import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import modalReducer from './modal'; // modalReducer를 임포트

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

// redux-persist의 persistConfig를 설정
const persistConfig = {
  key: 'root',
  storage,
};

// rootReducer와 persistConfig를 사용하여 persistReducer를 생성
const persistedReducer = persistReducer(persistConfig, modalReducer);

// configureStore를 사용하여 Redux store를 생성
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 타입 사용을 위한 RootState 구현
export type RootState = ReturnType<typeof persistedReducer>;

// persistStore를 사용하여 Redux store를 유지
export const persistor = persistStore(store);

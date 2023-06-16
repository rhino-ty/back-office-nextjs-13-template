import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modal'; // modalReducer를 임포트

// redux-persist의 persistConfig를 설정
const persistConfig = {
  key: 'root',
  storage,
};

// rootReducer와 persistConfig를 사용하여 persistReducer를 생성
const persistedReducer = persistReducer(persistConfig, modalReducer);

// configureStore를 사용하여 Redux store를 생성
const store = configureStore({
  reducer: persistedReducer,
});

// 타입 사용을 위한 RootState 구현
export type RootState = ReturnType<typeof persistedReducer>;

// persistStore를 사용하여 Redux store를 유지
export const persistor = persistStore(store);

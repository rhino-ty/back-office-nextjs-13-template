import { TOKEN_SAVE_NAME, restApi } from '#/apis';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  principal: null,
  hasNotify: true,
};

export const me = createAsyncThunk('auth/principal', async () => {
  // ---------------------------------------------------------------------------o
  // principal 설정 :  비동기
  // principal 설정
  const tempPrincipal = localStorage.getItem(TOKEN_SAVE_NAME);
  if (tempPrincipal) {
    // 서버에서 새롭게 토큰을 가져오는 로직은 필요에 따라서 추가
    // await restApi
    // const response = await restApi.get(`https://reqres.in/api/api/users/2`); // https::// 전체 url로도 사용 가능
    const response = await restApi.get(`/api/users/2`); // https::// 전체 url로도 사용 가능
    if (response) {
      return response?.data?.payload || response?.data;
      // return JSON.parse(tempPrincipal);
    }
  }

  return null;
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    initAuth(state, action) {
      state = action.payload || state;
    },
    setPrincipal(state, action) {
      state.principal = {
        ...action.payload,
      };
    },
    clearPrincipal(state) {
      state.principal = null;
    },
    setHasNotify(state, action) {
      state.hasNotify = action.payload;
    },
  },
  extraReducers: {
    /*
    [me.rejected]: (state, action) => {
      state.principal = action.payload;
    },
    */
    [me?.fulfilled]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const { initAuth, setHasNotify, setPrincipal, clearPrincipal } =
  AuthSlice.actions;

export default AuthSlice.reducer;

// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################
// #########################################################################################################################
// usage
/*
// principal
{
  "access_token": "",
  "refresh_token": "",
  "token_type": "bearer"
}
*/
/*
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOKEN_SAVE_NAME, restApi } from '../../apis';

const initialState = {
  principal: null,
  hasNotify: true,
};

export const me = createAsyncThunk('auth/principal', async () => {
  // principal 설정
  const tempPrincipal = localStorage.getItem(TOKEN_SAVE_NAME);
  if (tempPrincipal) {
    // 서버에서 새롭게 토큰을 가져오는 로직은 필요에 따라서 추가
    const response = await restApi.get(`/admin/mypage`);
    return (
      response &&
      response.data &&
      response.data.payload &&
      response.data.payload.account
    );
    // return JSON.parse(tempPrincipal);
  }

  return null;
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    init(state, action) {
      state = action.payload.auth || state;
    },
    initAuth(state, action) {
      state = action.payload || state;
    },
    setPrincipal(state, action) {
      state.principal = {
        ...action.payload,
      };
    },
    clearPrincipal(state) {
      state.principal = null;
    },
    setHasNotify(state, action) {
      state.hasNotify = action.payload;
    },
  },
  extraReducers: {
    [me.fulfilled]: (state, action) => {
      state.principal = action.payload;
    },
  },
});

export const { clearPrincipal, init, initAuth, setHasNotify, setPrincipal } =
  AuthSlice.actions;

export default AuthSlice.reducer;
*/

import { createSlice } from '@reduxjs/toolkit';

const authInitialState = { authenticated: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    }
  }
});
export const authActions = authSlice.actions;
export default authSlice.reducer;

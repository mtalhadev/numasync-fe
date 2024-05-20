import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    sidebarCollapsed: false,
    user: false,
  },
  reducers: {
    setSidebarCollapsed: (state, action) => {
      state.sidebarCollapsed = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setSidebarCollapsed, setUser } = globalSlice.actions;

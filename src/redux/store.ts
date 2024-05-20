import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice } from './slice/apiSlices/authSlice';
import { userSlice } from './slice/apiSlices/userSlice';
import { globalSlice } from './slice/reducers/global.reducer';
import { userReducer } from './slice/reducers/user.reducer';
import { entitySlice } from './slice/apiSlices/entitySlice';
import { workspaceSlice } from './slice/apiSlices/workspaceSlice';

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [entitySlice.reducerPath]: entitySlice.reducer,
    [workspaceSlice.reducerPath]: workspaceSlice.reducer,
    global: globalSlice.reducer,
    userReducer: userReducer.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([
      userSlice.middleware,
      authSlice.middleware,
      entitySlice.middleware,
      workspaceSlice.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

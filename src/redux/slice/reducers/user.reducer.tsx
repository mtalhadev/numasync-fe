import { createSlice } from '@reduxjs/toolkit';
// import { dummyUser } from 'src/data/dummyData';
import { WorkspaceType } from 'src/types/commonTypes';
import { LoginApiData } from 'src/types/form/login';

interface IUserReducer {
  user: LoginApiData['user'] | null;
  selectedWorkspace: WorkspaceType | null;
}

const initialState: IUserReducer = {
  user: null,
  selectedWorkspace: null,
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setSelectedWorkspace: (state, action) => {
      state.selectedWorkspace = action.payload;
    },
  },
});

export const { setUser, setSelectedWorkspace } = userReducer.actions;

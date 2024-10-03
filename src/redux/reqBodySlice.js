
import { createSlice } from '@reduxjs/toolkit';

const reqBodySlice = createSlice({
  name: 'reqbody',
  initialState: {
    data:'fd'
  },
  reducers: {
    changeBody: (state,action) => {
       state.data=action.payload
    },
  },
});

export const { changeBody } = reqBodySlice.actions;
export default reqBodySlice.reducer;

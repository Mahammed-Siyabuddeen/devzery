import { createSlice } from '@reduxjs/toolkit';

const resBodySlice = createSlice({
  name: 'resBody',
  initialState: {
    data:''
  },
  reducers: {
    setResBody: (state,action) => {
       state.data=action.payload
    },
  },
});

export const { setResBody } = resBodySlice.actions;
export default resBodySlice.reducer;

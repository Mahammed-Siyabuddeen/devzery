
import { createSlice } from '@reduxjs/toolkit';

const reqBodySlice = createSlice({
  name: 'reqbody',
  initialState: {
    data:`{
  "title":"siy",
  "body":"mia",
  "useID":"69"
}`
  },
  reducers: {
    changeBody: (state,action) => {
       state.data=action.payload
    },
  },
});

export const { changeBody } = reqBodySlice.actions;
export default reqBodySlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import reqBodySlice from './reqBodySlice';
import resBodySlice from './resBodySlice';

const store = configureStore({
  reducer: {
    reqbody:reqBodySlice,
    resbody:resBodySlice
  },
});

export default store;

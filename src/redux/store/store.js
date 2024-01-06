// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import cartReducer from '../slices/cart.slice';
import dataReducer from '../slices/data.slice';

const store = configureStore({
  reducer: {
    cart:cartReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

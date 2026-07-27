import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import designReducer from './designSlice';
import checkoutReducer from './checkoutSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    design: designReducer,
    checkout: checkoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TileItem } from '@/types';
import { INITIAL_TILES } from '@/lib/constants';
interface CartState {
  items: TileItem[];
}
const initialState: CartState = {
  items: INITIAL_TILES.map((tile) => ({ ...tile })),
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 0) item.quantity -= 1;
    },
    setQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) item.quantity = Math.max(0, action.payload.quantity);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    addItem(state, action: PayloadAction<TileItem>) {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        exists.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
  },
});
export const {
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  removeItem,
  addItem,
} = cartSlice.actions;
export default cartSlice.reducer;

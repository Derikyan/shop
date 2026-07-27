import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { calculateSubtotal, calculateShipping } from '@/lib/calculations';
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectSubtotal = createSelector(selectCartItems, (items) =>
  calculateSubtotal(items),
);
export const selectShipping = createSelector(selectSubtotal, (subtotal) =>
  calculateShipping(subtotal),
);
export const selectGrandTotal = createSelector(
  selectSubtotal,
  selectShipping,
  (subtotal, shipping) => subtotal + shipping,
);
export const selectDesignGrid = (state: RootState) => state.design.grid;
export const selectSelectedTileId = (state: RootState) => state.design.selectedTileId;
export const selectCheckout = (state: RootState) => state.checkout;
export const selectPaymentMethod = (state: RootState) => state.checkout.paymentMethod;
export const selectCheckoutErrors = (state: RootState) => state.checkout.errors;

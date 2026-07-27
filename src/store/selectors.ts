import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { calculateSubtotal, calculateShipping } from '@/lib/calculations';

/** Select all cart items */
export const selectCartItems = (state: RootState) => state.cart.items;

/** Memoized subtotal selector */
export const selectSubtotal = createSelector(selectCartItems, (items) =>
  calculateSubtotal(items),
);

/** Memoized shipping selector */
export const selectShipping = createSelector(selectSubtotal, (subtotal) =>
  calculateShipping(subtotal),
);

/** Memoized grand total selector */
export const selectGrandTotal = createSelector(
  selectSubtotal,
  selectShipping,
  (subtotal, shipping) => subtotal + shipping,
);

/** Design grid */
export const selectDesignGrid = (state: RootState) => state.design.grid;
export const selectSelectedTileId = (state: RootState) => state.design.selectedTileId;

/** Checkout form */
export const selectCheckout = (state: RootState) => state.checkout;
export const selectPaymentMethod = (state: RootState) => state.checkout.paymentMethod;
export const selectCheckoutErrors = (state: RootState) => state.checkout.errors;

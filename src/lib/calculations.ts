import { FREE_SHIPPING_THRESHOLD, SHIPPING_COST } from './constants';
import type { TileItem } from '@/types';

/** Calculate order subtotal: Σ(quantity × price) */
export function calculateSubtotal(items: readonly TileItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

/** Calculate shipping cost: free if subtotal > threshold, else flat rate */
export function calculateShipping(subtotal: number): number {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}

/** Calculate grand total: subtotal + shipping */
export function calculateGrandTotal(items: readonly TileItem[]): number {
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  return subtotal + shipping;
}

/** Format a number as USD currency string */
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

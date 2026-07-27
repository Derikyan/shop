import { FREE_SHIPPING_THRESHOLD, SHIPPING_COST } from './constants';
import type { TileItem } from '@/types';
export function calculateSubtotal(items: readonly TileItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}
export function calculateShipping(subtotal: number): number {
  return subtotal > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
}
export function calculateGrandTotal(items: readonly TileItem[]): number {
  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  return subtotal + shipping;
}
export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

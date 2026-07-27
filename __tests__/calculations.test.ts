import { calculateSubtotal, calculateShipping, calculateGrandTotal, formatCurrency } from '../src/lib/calculations';
import type { TileItem } from '../src/types';

describe('Business Logic Calculations', () => {
  const mockItems: TileItem[] = [
    { id: '1', name: 'A', price: 10, quantity: 2, imageSrc: '', thumbnailSrc: '', patternColor: '' },
    { id: '2', name: 'B', price: 20, quantity: 3, imageSrc: '', thumbnailSrc: '', patternColor: '' },
  ];

  describe('calculateSubtotal', () => {
    it('calculates correctly for empty cart', () => {
      expect(calculateSubtotal([])).toBe(0);
    });

    it('calculates sum of quantity * price correctly', () => {
      // (10 * 2) + (20 * 3) = 20 + 60 = 80
      expect(calculateSubtotal(mockItems)).toBe(80);
    });
  });

  describe('calculateShipping', () => {
    it('returns $25 flat rate for subtotal <= 500', () => {
      expect(calculateShipping(0)).toBe(25);
      expect(calculateShipping(499.99)).toBe(25);
      expect(calculateShipping(500)).toBe(25);
    });

    it('returns free shipping (0) for subtotal > 500', () => {
      expect(calculateShipping(500.01)).toBe(0);
      expect(calculateShipping(1000)).toBe(0);
    });
  });

  describe('calculateGrandTotal', () => {
    it('adds $25 shipping when subtotal <= 500', () => {
      expect(calculateGrandTotal(mockItems)).toBe(105); // 80 + 25
    });

    it('adds no shipping when subtotal > 500', () => {
      const expensiveItems: TileItem[] = [
        ...mockItems,
        { id: '3', name: 'C', price: 100, quantity: 5, imageSrc: '', thumbnailSrc: '', patternColor: '' }, // +500
      ];
      // Subtotal = 80 + 500 = 580
      // Shipping = 0
      expect(calculateGrandTotal(expensiveItems)).toBe(580);
    });
  });

  describe('formatCurrency', () => {
    it('formats numbers with $ and 2 decimal places', () => {
      expect(formatCurrency(0)).toBe('$0.00');
      expect(formatCurrency(25.5)).toBe('$25.50');
      expect(formatCurrency(1234.567)).toBe('$1234.57');
    });
  });
});

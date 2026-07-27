import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectSubtotal, selectShipping, selectGrandTotal } from '@/store/selectors';
import { formatCurrency } from '@/lib/calculations';

export function CartSummary() {
  const subtotal = useAppSelector(selectSubtotal);
  const shipping = useAppSelector(selectShipping);
  const grandTotal = useAppSelector(selectGrandTotal);

  return (
    <div className="flex flex-col items-end justify-center py-2 px-1 sm:px-4 space-y-1 font-display w-full sm:w-auto">
      <div className="flex items-center justify-end space-x-2 w-full">
        <span className="font-bold text-xs sm:text-sm uppercase">Subtotal:</span>
        <span className="font-bold text-base sm:text-lg w-fit min-w-[6.5rem] text-right bg-sand px-2 sm:px-3 border-2 border-charcoal rounded-sm shadow-inner tracking-wider">
          [{formatCurrency(subtotal)}]
        </span>
      </div>
      <div className="flex items-center justify-end space-x-2 w-full">
        <span className="font-bold text-xs sm:text-sm uppercase">Shipping:</span>
        <span className="font-bold text-base sm:text-lg w-fit min-w-[6.5rem] text-right bg-sand px-2 sm:px-3 border-2 border-charcoal rounded-sm shadow-inner tracking-wider">
          [{shipping === 0 ? '$0.00' : formatCurrency(shipping)}]
        </span>
      </div>
      <div className="flex items-center justify-end space-x-2 w-full">
        <span className="font-bold text-xs sm:text-sm uppercase">Grand Total:</span>
        <span className="font-bold text-base sm:text-lg w-fit min-w-[6.5rem] text-right bg-sand-light px-2 sm:px-3 border-2 border-charcoal rounded-sm shadow-inner tracking-wider text-navy">
          [{formatCurrency(grandTotal)}]
        </span>
      </div>
    </div>
  );
}

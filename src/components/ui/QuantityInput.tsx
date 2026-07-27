import React from 'react';

interface QuantityInputProps {
  quantity: number;
  onChange: (value: number) => void;
}

export function QuantityInput({ quantity, onChange }: QuantityInputProps) {
  return (
    <div className="flex items-center space-x-0.5 font-display font-bold text-xs sm:text-base text-charcoal">
      <span>[</span>
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value, 10);
          onChange(isNaN(val) ? 0 : val);
        }}
        className="w-8 sm:w-12 text-center bg-transparent border-none outline-none focus:ring-1 focus:ring-navy rounded no-spinners p-0"
        aria-label="Quantity"
      />
      <span>]</span>
    </div>
  );
}

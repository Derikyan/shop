import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectCartItems } from '@/store/selectors';
import { incrementQuantity, decrementQuantity, setQuantity, removeItem, addItem } from '@/store/cartSlice';
import { CartRow } from './CartRow';
import { CartSummary } from './CartSummary';
import { EXTRA_TILES } from '@/lib/constants';
export function CartTable() {
  const items = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const [showAddMenu, setShowAddMenu] = useState(false);
  const handleAddNewTile = (tileId: string) => {
    const tile = EXTRA_TILES.find(t => t.id === tileId);
    if (tile) {
      dispatch(addItem({ ...tile, quantity: 10 }));
    }
    setShowAddMenu(false);
  };
  return (
    <div className="w-full bg-cream">
      <div className="border-2 border-charcoal">
        <div>
          <div className="grid grid-cols-5 bg-cream-dark border-b-2 border-charcoal relative z-10">
            <div className="col-span-1 border-r-2 border-charcoal py-1.5 px-0.5 text-center text-[10px] sm:text-sm font-bold font-display uppercase leading-tight flex items-center justify-center">
              Tile Collection
            </div>
            <div className="col-span-1 border-r-2 border-charcoal py-1.5 px-0.5 text-center text-[10px] sm:text-sm font-bold font-display uppercase leading-tight flex items-center justify-center">
              Item
            </div>
            <div className="col-span-1 border-r-2 border-charcoal py-1.5 px-0.5 text-center text-[10px] sm:text-sm font-bold font-display uppercase leading-tight flex flex-col items-center justify-center">
              <span>Quantity</span>
              <span className="text-[9px] sm:text-xs lowercase normal-case">(sq. ft.)</span>
            </div>
            <div className="col-span-1 border-r-2 border-charcoal py-1.5 px-0.5 text-center text-[10px] sm:text-sm font-bold font-display uppercase leading-tight flex flex-col items-center justify-center">
              <span>Unit Price</span>
              <span className="text-[9px] sm:text-xs normal-case">($)</span>
            </div>
            <div className="col-span-1 py-1.5 px-0.5 text-center text-[10px] sm:text-sm font-bold font-display uppercase leading-tight flex items-center justify-center">
              Actions
            </div>
          </div>
          <div className="relative z-0">
            <AnimatePresence>
              {items.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  onIncrement={() => dispatch(incrementQuantity(item.id))}
                  onDecrement={() => dispatch(decrementQuantity(item.id))}
                  onSetQuantity={(qty) => dispatch(setQuantity({ id: item.id, quantity: qty }))}
                  onRemove={() => dispatch(removeItem(item.id))}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center border-2 border-t-0 border-charcoal bg-cream-dark p-2 sm:p-3 relative z-10 space-y-3 sm:space-y-0">
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="flex items-center justify-center sm:justify-start w-full sm:w-auto space-x-2 bg-sand border-2 border-charcoal px-3 py-1.5 hover:bg-sand-light transition-colors font-display font-bold text-xs sm:text-sm uppercase shadow-sm focus:outline-none"
          >
            <span className="text-lg leading-none">+</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-terracotta border border-charcoal relative shrink-0">
              <div className="absolute inset-1 border border-cream" />
            </div>
            <span className="text-left leading-tight">Add New Tile<br/>To Cart</span>
          </button>
          {showAddMenu && (
            <div className="absolute bottom-full left-0 mb-1 w-full sm:w-48 bg-cream border-2 border-charcoal shadow-lg z-50">
              {EXTRA_TILES.map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handleAddNewTile(tile.id)}
                  className="w-full text-left px-4 py-2 hover:bg-sand transition-colors font-display text-xs sm:text-sm border-b border-charcoal last:border-b-0"
                >
                  {tile.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <CartSummary />
      </div>
    </div>
  );
}

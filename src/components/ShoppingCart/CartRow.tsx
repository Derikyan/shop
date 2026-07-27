import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { TileItem } from "@/types";
import { QuantityInput } from "../ui/QuantityInput";
import { ActionButtons } from "../ui/ActionButtons";
import { formatCurrency } from "@/lib/calculations";

interface CartRowProps {
  item: TileItem;
  onIncrement: () => void;
  onDecrement: () => void;
  onSetQuantity: (qty: number) => void;
  onRemove: () => void;
}

export function CartRow({
  item,
  onIncrement,
  onDecrement,
  onSetQuantity,
  onRemove,
}: CartRowProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="grid grid-cols-5 items-center border-b-2 border-charcoal bg-transparent hover:bg-cream-dark transition-colors"
    >
      <div className="flex flex-col items-center justify-center p-1 sm:p-2 text-center col-span-1 border-r-2 border-charcoal h-full min-w-0">
        <div className="w-8 h-8 sm:w-12 sm:h-12 relative mb-0.5 sm:mb-1 shadow-sm border border-charcoal rounded-sm overflow-hidden shrink-0">
          <Image
            src={item.thumbnailSrc}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-[10px] sm:text-xs font-bold font-display uppercase leading-tight text-center break-words">
          {item.name}
        </span>
      </div>

      <div className="flex items-center justify-center p-1 sm:p-2 col-span-1 border-r-2 border-charcoal h-full min-w-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 relative shadow-sm border border-charcoal rounded-sm overflow-hidden shrink-0">
          <Image
            src={item.imageSrc}
            alt={`${item.name} pattern`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-1 sm:p-2 col-span-1 border-r-2 border-charcoal h-full min-w-0">
        <QuantityInput quantity={item.quantity} onChange={onSetQuantity} />
      </div>

      <div className="flex items-center justify-center p-1 sm:p-2 col-span-1 border-r-2 border-charcoal h-full font-display font-bold text-xs sm:text-base min-w-0">
        [{formatCurrency(item.price)}]
      </div>

      <div className="flex items-center justify-center p-1 col-span-1 h-full min-w-0">
        <ActionButtons onAdd={onIncrement} onRemove={onRemove} />
      </div>
    </motion.div>
  );
}

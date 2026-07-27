import React from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectSelectedTileId } from '@/store/selectors';
import { selectPaletteTile } from '@/store/designSlice';
import { PALETTE_TILES } from '@/lib/constants';
export function DesignPalette() {
  const selectedTileId = useAppSelector(selectSelectedTileId);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col h-full bg-cream border-2 border-charcoal border-l-0 shadow-sm w-44 sm:w-48 shrink-0">
      <div className="p-3 sm:p-4 text-center border-b-2 border-charcoal bg-sand">
        <h3 className="font-display font-bold uppercase tracking-wider text-charcoal text-sm sm:text-base">Design Palate</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 palette-scrollbar">
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {PALETTE_TILES.map((tile) => (
            <button
              key={tile.id}
              onClick={() => dispatch(selectPaletteTile(tile.id === selectedTileId ? null : tile.id))}
              className={`relative aspect-square w-full border-2 transition-all rounded-sm overflow-hidden ${
                selectedTileId === tile.id 
                  ? 'border-navy shadow-md scale-105 ring-2 ring-navy ring-offset-1 ring-offset-cream' 
                  : 'border-charcoal hover:border-terracotta hover:shadow-sm hover:scale-[1.03]'
              }`}
              aria-label={`Select ${tile.name}`}
              title={tile.name}
            >
              <Image src={tile.imageSrc} alt={tile.name} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
      {}
      <div className="p-3 sm:p-4 border-t-2 border-charcoal bg-cream-dark">
         <button
            onClick={() => dispatch(selectPaletteTile(null))}
            className={`w-full py-2 font-display font-bold text-sm uppercase transition-colors border-2 rounded-sm ${
              selectedTileId === null
                ? 'bg-charcoal text-cream border-charcoal'
                : 'bg-cream text-charcoal border-charcoal hover:bg-sand'
            }`}
          >
            Clear Brush
          </button>
      </div>
    </div>
  );
}

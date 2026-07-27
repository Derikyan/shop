import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectDesignGrid, selectSelectedTileId } from '@/store/selectors';
import { placeTile, clearCell } from '@/store/designSlice';
import { GRID_SIZE, PALETTE_TILES } from '@/lib/constants';
export function DesignGrid() {
  const grid = useAppSelector(selectDesignGrid);
  const selectedTileId = useAppSelector(selectSelectedTileId);
  const dispatch = useAppDispatch();
  const handleCellClick = (row: number, col: number) => {
    if (selectedTileId) {
      dispatch(placeTile({ row, col }));
    } else {
      dispatch(clearCell({ row, col }));
    }
  };
  return (
    <div className="flex flex-col h-full bg-cream-medium border-2 border-charcoal shadow-sm">
      <div className="p-3 sm:p-4 text-center border-b-2 border-charcoal bg-cream">
        <h3 className="font-display font-bold uppercase tracking-wider text-charcoal text-sm sm:text-base">Visualize Your Order:</h3>
        <p className="text-xs sm:text-sm mt-0.5">Drag and drop tiles here to create patterns.</p>
        <p className="text-[10px] sm:text-xs text-charcoal-light italic mt-1">(Select a tile from the palette, then click a cell to place it)</p>
      </div>
      <div className="flex-1 flex items-center justify-center p-3 sm:p-4">
        <div 
          className="grid bg-charcoal p-[2px] shadow-card rounded-sm"
          style={{ 
            gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
            gap: '1px',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '1 / 1'
          }}
        >
          {grid.map((row, rowIndex) => (
            row.map((cellId, colIndex) => {
              const tile = cellId ? PALETTE_TILES.find(t => t.id === cellId) : null;
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={`bg-cream-medium w-full h-full relative cursor-pointer transition-all duration-150 ${
                    selectedTileId 
                      ? 'hover:bg-sand-light hover:shadow-inner' 
                      : tile ? 'hover:opacity-80' : ''
                  }`}
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <AnimatePresence>
                    {tile && (
                      <motion.div
                        key={tile.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="absolute inset-0"
                      >
                        <Image src={tile.imageSrc} alt={tile.name} fill className="object-cover" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
}

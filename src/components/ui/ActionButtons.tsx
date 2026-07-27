import React from 'react';
interface ActionButtonsProps {
  onAdd: () => void;
  onRemove: () => void;
}
export function ActionButtons({ onAdd, onRemove }: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-1.5">
      <button
        onClick={onAdd}
        className="flex flex-col items-center justify-center font-bold font-display group focus:outline-none"
        aria-label="Add one"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-charcoal bg-forest rounded-sm flex items-center justify-center group-hover:scale-105 transition-all shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cream" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-[9px] sm:text-[10px] mt-0.5 leading-none">ADD</span>
      </button>
      <button
        onClick={onRemove}
        className="flex flex-col items-center justify-center font-bold font-display group focus:outline-none"
        aria-label="Remove item"
      >
        <div className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-charcoal bg-terracotta rounded-sm flex items-center justify-center group-hover:scale-105 transition-all shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cream" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-[9px] sm:text-[10px] mt-0.5 leading-none">REMOVE</span>
      </button>
    </div>
  );
}

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectCartItems } from '@/store/selectors';
export function Header() {
  const cartItems = useAppSelector(selectCartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="w-full bg-cream relative z-50">
      {}
      <div className="w-full border-pattern" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 border-b-2 border-charcoal">
          {}
          <nav className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm font-bold tracking-wider font-display text-navy uppercase min-w-0 overflow-hidden">
            <span className="hidden lg:inline-block cursor-pointer hover:text-terracotta transition-colors">Home</span>
            <span className="cursor-pointer hover:text-terracotta transition-colors whitespace-nowrap">Shop</span>
            <span className="cursor-pointer hover:text-terracotta transition-colors whitespace-nowrap">Collections</span>
            <span className="hidden sm:inline-block cursor-pointer hover:text-terracotta transition-colors whitespace-nowrap">About Us</span>
            <span className="hidden lg:inline-block cursor-pointer hover:text-terracotta transition-colors">Faq</span>
            <span className="hidden lg:inline-block cursor-pointer hover:text-terracotta transition-colors">Gallery</span>
            <span className="hidden lg:inline-block cursor-pointer hover:text-terracotta transition-colors">Blog</span>
          </nav>
          {}
          <div className="flex items-center space-x-2 sm:space-x-4 shrink-0 ml-2">
            {}
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-charcoal text-[10px] sm:text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-display border border-charcoal">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </div>
            {}
            <div className="hidden lg:flex items-center space-x-2 border-2 border-navy rounded-full pl-1 pr-3 py-1 cursor-pointer hover:bg-cream-dark transition-colors">
              <div className="bg-navy text-cream rounded-full h-6 w-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-bold text-navy font-display">A. Smith</span>
            </div>
            {}
            <div className="lg:hidden flex items-center space-x-1.5">
              <div className="bg-navy text-cream rounded-full h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="bg-navy text-cream px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold font-display rounded shadow-sm hover:bg-navy-dark transition-colors whitespace-nowrap">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import React from 'react';
import Image from 'next/image';
export function HeroBanner() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 relative">
      {}
      <div className="lg:hidden absolute top-0 left-0 p-2">
         <Image src="/shop/tiles/azure-mosaic-thumb.svg" alt="" width={32} height={32} />
      </div>
      <div className="lg:hidden absolute top-0 right-0 p-2">
         <Image src="/shop/tiles/yellow-star-thumb.svg" alt="" width={32} height={32} className="rotate-90" />
      </div>
      <div className="text-center z-10 px-2 sm:px-4 max-w-4xl w-full">
        <h1 className="font-display text-2xl sm:text-4xl md:text-6xl font-black text-charcoal tracking-tight uppercase leading-none">
          Ceramic Tile Order Form
        </h1>
        <div className="flex items-center justify-center space-x-1.5 sm:space-x-3 mt-3 mb-2">
          {}
          <div className="flex space-x-1">
             <Image src="/shop/tiles/ocean-wave-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
             <Image src="/shop/tiles/terracotta-dot-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
             <Image src="/shop/tiles/forest-fern-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
          </div>
          <h2 className="font-display text-xs sm:text-2xl font-bold tracking-wider sm:tracking-widest text-charcoal uppercase">
            The Artisan Kiln
          </h2>
          {}
          <div className="flex space-x-1">
             <Image src="/shop/tiles/azure-mosaic-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
             <Image src="/shop/tiles/yellow-star-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
             <Image src="/shop/tiles/coral-bloom-thumb.svg" alt="" width={18} height={18} className="border border-charcoal sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

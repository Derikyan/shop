import React from "react";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="w-full bg-cream mt-auto py-8 relative">
      {}
      <div className="absolute top-0 w-full flex justify-between px-2">
        <div className="w-full border-t-2 border-charcoal mt-2 opacity-30"></div>
      </div>
      {}
      <div className="flex justify-between items-end px-4 max-w-7xl mx-auto h-24 mb-4 relative opacity-80">
        <div className="flex items-end space-x-2">
          <div className="w-16 h-16 relative">
            <Image
              src="/shop/tiles/azure-mosaic.svg"
              alt=""
              fill
              className="object-cover rounded-tl-[50%]"
            />
          </div>
          <div className="w-10 h-10 relative">
            <Image
              src="/shop/tiles/terracotta-dot.svg"
              alt=""
              fill
              className="object-cover rounded-t-full"
            />
          </div>
          <div className="w-8 h-8 relative">
            <Image
              src="/shop/tiles/yellow-star.svg"
              alt=""
              fill
              className="object-cover rounded-tr-full"
            />
          </div>
        </div>
        <div className="flex items-end space-x-2">
          <div className="w-12 h-16 relative border-t-2 border-charcoal border-l-2 bg-forest rounded-tl-full opacity-60"></div>
          <div className="w-16 h-20 relative border-t-2 border-charcoal border-r-2 bg-forest rounded-tr-full opacity-60"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-bold font-display uppercase tracking-wider mb-2">
          <a href="#" className="hover:text-terracotta transition-colors">
            Terms of Service
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-terracotta transition-colors">
            Privacy Policy
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-terracotta transition-colors">
            Shipping Info
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:text-terracotta transition-colors">
            Contact Us
          </a>
        </div>
        <p className="text-[10px] text-charcoal-light font-display">
          &copy; 2026 THE ARTISAN KILN. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

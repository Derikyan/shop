'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { HeroBanner } from '@/components/HeroBanner';
import { CartTable } from '@/components/ShoppingCart/CartTable';
import { DesignGrid } from '@/components/DesignTool/DesignGrid';
import { DesignPalette } from '@/components/DesignTool/DesignPalette';
import { OrderSummary } from '@/components/OrderSummary/OrderSummary';
import { CustomerForm } from '@/components/OrderSummary/CustomerForm';
import { PaymentForm } from '@/components/OrderSummary/PaymentForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background Decorative Pattern (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0" 
           style={{ backgroundImage: 'radial-gradient(#4A7C59 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Header />
      
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <HeroBanner />

        {/* --- MOBILE LAYOUT (< lg) --- */}
        <div className="flex flex-col lg:hidden space-y-6 mt-4 max-w-2xl mx-auto">
          
          <div className="bg-cream-dark p-3 sm:p-4 border-2 border-charcoal shadow-sm">
             <CustomerForm />
          </div>

          <div>
             <CartTable />
          </div>

          <div className="bg-cream p-3 sm:p-4 border-2 border-charcoal shadow-sm">
             <PaymentForm />
          </div>

          <div className="pt-2">
             <h2 className="font-display font-bold text-base sm:text-lg uppercase mb-2">Design Tool & Palette</h2>
             <div className="flex flex-col sm:flex-row w-full border-2 border-charcoal shadow-sm">
               <div className="flex-1">
                 <DesignGrid />
               </div>
               <DesignPalette />
             </div>
          </div>

        </div>

        {/* --- DESKTOP LAYOUT (>= lg) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mt-8 items-start">
          
          {/* Column 1: Shopping Cart (5 cols) */}
          <div className="col-span-5 h-full">
            <h2 className="font-display font-bold text-xl uppercase tracking-wider mb-3">Shopping Cart & Design Tool</h2>
            <CartTable />
          </div>

          {/* Column 2: Design Tool (4 cols) */}
          <div className="col-span-4 h-full flex pt-10">
             <DesignGrid />
             <DesignPalette />
          </div>

          {/* Column 3: Order Summary (3 cols) */}
          <div className="col-span-3 h-full pt-10">
             <OrderSummary />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import { CustomerForm } from './CustomerForm';
import { PaymentForm } from './PaymentForm';
import { CartSummary } from '../ShoppingCart/CartSummary';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectCheckout, selectCartItems } from '@/store/selectors';
import { setErrors } from '@/store/checkoutSlice';
import { validateCheckoutForm } from '@/lib/validation';

export function OrderSummary() {
  const dispatch = useAppDispatch();
  const checkout = useAppSelector(selectCheckout);
  const cartItems = useAppSelector(selectCartItems);

  const handlePlaceOrder = () => {
    const errors = validateCheckoutForm(checkout);
    if (Object.keys(errors).length > 0) {
      dispatch(setErrors(errors));
      // Scroll to top or first error if needed, for now just show errors
      alert('Please correct the errors in the form before placing your order.');
    } else {
      if (cartItems.length === 0) {
         alert('Your cart is empty.');
         return;
      }
      alert('Order placed successfully! Thank you.');
      console.log('Order Data:', { checkout, cartItems });
    }
  };

  return (
    <div className="flex flex-col space-y-6 h-full">
      {/* Desktop Order Summary Header */}
      <div className="hidden lg:block border-2 border-charcoal bg-sand inline-block px-3 py-1 font-display font-bold text-sm uppercase self-start shadow-sm mb-2">
        Order Summary
      </div>

      <div className="flex-1 space-y-8">
         {/* Customer Form - Hidden on mobile here, as it's at the top in mobile layout */}
         <div className="hidden lg:block">
           <CustomerForm />
         </div>

         {/* Cart Summary - Desktop only (Mobile has it under cart table) */}
         <div className="hidden lg:flex justify-end pt-4 border-t-2 border-charcoal">
           <CartSummary />
         </div>

         <PaymentForm />
         
         {/* Project Notes - Only shown here on mobile (since it's separated from customer form) */}
         <div className="lg:hidden">
            <div className="flex flex-col gap-1 pt-2">
              <label htmlFor="projectNotesMobile" className="font-display font-bold uppercase text-sm whitespace-nowrap">
                Project Name / Notes:
              </label>
              <div className="w-full">
                <input
                  type="text"
                  id="projectNotesMobile"
                  name="projectNotes"
                  value={checkout.projectNotes}
                  onChange={(e) => dispatch({ type: 'checkout/setField', payload: { field: 'projectNotes', value: e.target.value } })}
                  className="w-full bg-transparent border-b-2 outline-none font-display text-lg px-1 transition-colors border-charcoal focus:border-navy"
                />
              </div>
            </div>
         </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-navy text-cream font-display font-bold uppercase py-4 mt-6 hover:bg-navy-dark transition-colors shadow-md border-2 border-charcoal rounded-sm text-lg tracking-wider"
      >
        Place Secure Order
      </button>
    </div>
  );
}

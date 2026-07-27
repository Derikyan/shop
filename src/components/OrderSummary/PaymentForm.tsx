import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectCheckout, selectCheckoutErrors } from '@/store/selectors';
import { setField, setPaymentMethod } from '@/store/checkoutSlice';
import type { PaymentMethod } from '@/types';
import { formatCardNumber, formatExpiry, detectCardBrand } from '@/lib/validation';
export function PaymentForm() {
  const checkout = useAppSelector(selectCheckout);
  const errors = useAppSelector(selectCheckoutErrors);
  const dispatch = useAppDispatch();
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    dispatch(setField({ field: 'cardNumber', value: formatted }));
  };
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiry(e.target.value);
    dispatch(setField({ field: 'cardExpiry', value: formatted }));
  };
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    dispatch(setField({ field: 'cardCvv', value: val }));
  };
  const cardBrand = detectCardBrand(checkout.cardNumber);
  const paymentOptions: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    {
      id: 'credit_card',
      label: 'Credit/Debit Card',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00457C]" viewBox="0 0 24 24" fill="currentColor">
           <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
        </svg>
      )
    },
    {
      id: 'apple_pay',
      label: 'Apple Pay',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-charcoal" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.1 13.9c-.3.4-.6.8-.9 1.1-.3.3-.7.6-1.1.8-.4.2-.8.3-1.1.3-.4 0-.7-.1-1-.2-.3-.1-.6-.3-1-.3-.4 0-.7.2-1 .3-.3.1-.6.2-1 .2-.4 0-.8-.1-1.1-.3-.4-.2-.8-.5-1.1-.8-.3-.3-.6-.7-.9-1.1-.3-.4-.5-.9-.6-1.4-.2-.5-.3-1-.3-1.5 0-.5.1-1 .3-1.5.2-.5.4-.9.7-1.3.3-.4.7-.7 1.1-1 .4-.3.9-.4 1.4-.4.5 0 1 .1 1.4.3.4.2.8.2 1.1.2.4 0 .8-.1 1.2-.3.4-.2.8-.3 1.3-.3.5 0 .9.1 1.4.4.4.3.8.6 1.1 1-.4.3-.8.6-1 1-.2.4-.4.8-.4 1.3 0 .5.1.9.3 1.3.2.4.5.7.8 1 .4.2.7.4 1.1.5-.1.5-.3 1-.6 1.4z"/>
          <path d="M14.9 6.9c-.3.3-.6.5-1 .7-.4.2-.8.3-1.2.3-.1 0-.1 0-.2 0 0-.4.1-.9.3-1.3.2-.4.5-.8.8-1.1.3-.3.7-.5 1.1-.7.4-.2.8-.3 1.2-.3.1 0 .2 0 .2.1-.1.4-.2.9-.4 1.3-.2.4-.5.7-.8 1z"/>
        </svg>
      )
    },
    {
      id: 'bank_transfer',
      label: 'Bank Transfer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A7C59]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 21h20v-2H2v2zm10-18L2 8h20L12 3zm-6 7h2v7H6v-7zm6 0h2v7h-2v-7zm6 0h2v7h-2v-7z" />
        </svg>
      )
    }
  ];
  return (
    <div className="flex flex-col space-y-4">
      <div className="border-2 border-charcoal bg-cream inline-block px-3 py-1 font-display font-bold text-sm uppercase self-start shadow-sm mb-2">
        Select Payment Method:
      </div>
      <div className="grid grid-cols-4 border-2 border-charcoal divide-x-2 divide-charcoal">
        {paymentOptions.map((option) => (
          <label 
            key={option.id}
            className={`flex flex-col items-center justify-center p-1.5 sm:p-3 cursor-pointer transition-colors ${
              checkout.paymentMethod === option.id ? 'bg-cream-dark' : 'bg-cream hover:bg-cream-dark/50'
            }`}
          >
            <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-2 w-full justify-center">
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={checkout.paymentMethod === option.id}
                  onChange={() => dispatch(setPaymentMethod(option.id))}
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                />
                <div className={`flex items-center justify-center w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-charcoal bg-cream flex-shrink-0 transition-colors ${checkout.paymentMethod === option.id ? 'border-navy' : ''}`}>
                   {checkout.paymentMethod === option.id && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-navy" />
                   )}
                </div>
              </div>
              <div className="bg-sand p-0.5 sm:p-1 border border-charcoal rounded shadow-sm">
                {option.icon}
              </div>
            </div>
            <span className="font-display font-bold text-[8px] sm:text-xs text-center uppercase leading-tight">
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {checkout.paymentMethod === 'credit_card' && (
        <div className="bg-sand p-4 border-2 border-charcoal rounded-sm shadow-sm space-y-4 mt-2">
          {}
          <div className="flex items-center space-x-3 mb-1">
             <div className="flex items-center justify-center w-4 h-4 rounded-full border border-navy bg-cream flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-navy" />
             </div>
             <div className="flex space-x-1">
               <div className={`w-8 h-5 border border-charcoal flex items-center justify-center bg-cream rounded-sm ${cardBrand === 'visa' ? 'ring-1 ring-navy' : ''}`}>
                 <span className="text-[10px] font-black text-[#1434CB] italic">VISA</span>
               </div>
               <div className={`w-8 h-5 border border-charcoal flex items-center justify-center bg-cream rounded-sm ${cardBrand === 'mastercard' ? 'ring-1 ring-navy' : ''}`}>
                 <div className="flex -space-x-1">
                   <div className="w-3 h-3 rounded-full bg-[#EB001B] opacity-80"></div>
                   <div className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-80"></div>
                 </div>
               </div>
             </div>
          </div>
          <div className="relative">
             <input
               type="text"
               placeholder="CARD NUMBER"
               value={checkout.cardNumber}
               onChange={handleCardNumberChange}
               className={`w-full bg-cream border-2 outline-none font-display font-bold p-2 text-sm shadow-inner transition-colors ${
                 errors.cardNumber ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
               }`}
               maxLength={19}
             />
             {errors.cardNumber && (
              <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.cardNumber}</span>
            )}
          </div>
          <div className="flex space-x-4 relative">
             <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="EXPIRATION /"
                  value={checkout.cardExpiry}
                  onChange={handleExpiryChange}
                  className={`w-full bg-cream border-2 outline-none font-display font-bold p-2 text-sm shadow-inner transition-colors ${
                    errors.cardExpiry ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
                  }`}
                  maxLength={5}
                />
                 {errors.cardExpiry && (
                  <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.cardExpiry}</span>
                )}
             </div>
             <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="CVV"
                  value={checkout.cardCvv}
                  onChange={handleCvvChange}
                  className={`w-full bg-cream border-2 outline-none font-display font-bold p-2 text-sm shadow-inner transition-colors ${
                    errors.cardCvv ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
                  }`}
                  maxLength={4}
                />
                 {errors.cardCvv && (
                  <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.cardCvv}</span>
                )}
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectCheckout, selectCheckoutErrors } from '@/store/selectors';
import { setField } from '@/store/checkoutSlice';
export function CustomerForm() {
  const checkout = useAppSelector(selectCheckout);
  const errors = useAppSelector(selectCheckoutErrors);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setField({ field: name as any, value }));
  };
  return (
    <div className="flex flex-col space-y-3 font-display">
      {}
      <div className="flex items-end gap-2">
        <label htmlFor="customerName" className="font-bold uppercase text-xs sm:text-sm whitespace-nowrap">
          Customer Name:
        </label>
        <div className="w-full relative">
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={checkout.customerName}
            onChange={handleChange}
            className={`w-full bg-transparent border-b-2 outline-none font-bold text-sm sm:text-lg px-1 transition-colors ${
              errors.customerName ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
            }`}
          />
          {errors.customerName && (
            <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.customerName}</span>
          )}
        </div>
      </div>
      {}
      <div className="flex flex-row gap-2 sm:gap-4">
        {}
        <div className="flex items-end gap-1 flex-1 min-w-0">
          <label htmlFor="phone" className="font-bold uppercase text-xs sm:text-sm whitespace-nowrap">
            Phone:
          </label>
          <div className="w-full relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={checkout.phone}
              onChange={handleChange}
              className={`w-full bg-transparent border-b-2 outline-none font-bold text-sm sm:text-lg px-1 transition-colors ${
                errors.phone ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
              }`}
            />
            {errors.phone && (
              <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.phone}</span>
            )}
          </div>
        </div>
        {}
        <div className="flex items-end gap-1 flex-[1.4] min-w-0">
          <label htmlFor="email" className="font-bold uppercase text-xs sm:text-sm whitespace-nowrap">
            Email:
          </label>
          <div className="w-full relative">
            <input
              type="email"
              id="email"
              name="email"
              value={checkout.email}
              onChange={handleChange}
              className={`w-full bg-transparent border-b-2 outline-none font-bold text-sm sm:text-lg px-1 transition-colors ${
                errors.email ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
              }`}
            />
            {errors.email && (
              <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.email}</span>
            )}
          </div>
        </div>
      </div>
      {}
      <div className="flex items-end gap-2">
        <label htmlFor="shippingAddress" className="font-bold uppercase text-xs sm:text-sm whitespace-nowrap">
          Shipping Address:
        </label>
        <div className="w-full relative">
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={checkout.shippingAddress}
            onChange={handleChange}
            className={`w-full bg-transparent border-b-2 outline-none font-bold text-sm sm:text-lg px-1 transition-colors ${
              errors.shippingAddress ? 'border-error text-error placeholder-error' : 'border-charcoal focus:border-navy'
            }`}
          />
          {errors.shippingAddress && (
            <span className="absolute -bottom-4 left-0 text-[10px] text-error font-bold">{errors.shippingAddress}</span>
          )}
        </div>
      </div>
      {}
      <div className="flex items-end gap-2 pt-1">
        <label htmlFor="projectNotes" className="font-bold uppercase text-xs sm:text-sm whitespace-nowrap">
          Project Notes:
        </label>
        <div className="w-full relative">
          <input
            type="text"
            id="projectNotes"
            name="projectNotes"
            value={checkout.projectNotes}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 outline-none font-bold text-sm sm:text-lg px-1 transition-colors border-charcoal focus:border-navy"
          />
        </div>
      </div>
    </div>
  );
}

import type { CardBrand, ValidationErrors, CheckoutFormData } from '@/types';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;
const CARD_NUMBER_RE = /^\d{13,19}$/;
const EXPIRY_RE = /^(0[1-9]|1[0-2])\/(\d{2})$/;
const CVV_RE = /^\d{3,4}$/;
export function detectCardBrand(number: string): CardBrand {
  const cleaned = number.replace(/\s/g, '');
  if (/^4/.test(cleaned)) return 'visa';
  if (/^5[1-5]/.test(cleaned) || /^2[2-7]/.test(cleaned)) return 'mastercard';
  return null;
}
export function formatCardNumber(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}
export function formatExpiry(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 4);
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
}
export function validateCheckoutForm(data: CheckoutFormData): ValidationErrors {
  const errors: ValidationErrors = {};
  if (!data.customerName.trim()) {
    errors.customerName = 'Name is required';
  } else if (data.customerName.trim().length < 2) {
    errors.customerName = 'Name must be at least 2 characters';
  }
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = 'Invalid email format';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone is required';
  } else if (!PHONE_RE.test(data.phone.trim())) {
    errors.phone = 'Invalid phone format';
  }
  if (!data.shippingAddress.trim()) {
    errors.shippingAddress = 'Shipping address is required';
  }
  if (data.paymentMethod === 'credit_card') {
    const cardDigits = data.cardNumber.replace(/\s/g, '');
    if (!cardDigits) {
      errors.cardNumber = 'Card number is required';
    } else if (!CARD_NUMBER_RE.test(cardDigits)) {
      errors.cardNumber = 'Invalid card number';
    }
    if (!data.cardExpiry) {
      errors.cardExpiry = 'Expiry is required';
    } else if (!EXPIRY_RE.test(data.cardExpiry)) {
      errors.cardExpiry = 'Use MM/YY format';
    } else {
      const match = data.cardExpiry.match(EXPIRY_RE);
      if (match) {
        const month = parseInt(match[1], 10);
        const year = 2000 + parseInt(match[2], 10);
        const now = new Date();
        const expiry = new Date(year, month);
        if (expiry < now) {
          errors.cardExpiry = 'Card is expired';
        }
      }
    }
    if (!data.cardCvv) {
      errors.cardCvv = 'CVV is required';
    } else if (!CVV_RE.test(data.cardCvv)) {
      errors.cardCvv = 'Invalid CVV';
    }
  }
  return errors;
}

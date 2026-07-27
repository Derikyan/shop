import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PaymentMethod, ValidationErrors } from '@/types';

interface CheckoutState {
  customerName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  projectNotes: string;
  paymentMethod: PaymentMethod;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  errors: ValidationErrors;
}

const initialState: CheckoutState = {
  customerName: '',
  phone: '',
  email: '',
  shippingAddress: '',
  projectNotes: '',
  paymentMethod: 'credit_card',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  errors: {},
};

type FormField = keyof Omit<CheckoutState, 'errors' | 'paymentMethod'>;

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setField(state, action: PayloadAction<{ field: FormField; value: string }>) {
      const { field, value } = action.payload;
      state[field] = value;
      // Clear the error for this field as user types
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },

    setPaymentMethod(state, action: PayloadAction<PaymentMethod>) {
      state.paymentMethod = action.payload;
      // Clear card-related errors when switching away from credit card
      if (action.payload !== 'credit_card') {
        delete state.errors.cardNumber;
        delete state.errors.cardExpiry;
        delete state.errors.cardCvv;
      }
    },

    setErrors(state, action: PayloadAction<ValidationErrors>) {
      state.errors = action.payload;
    },

    clearErrors(state) {
      state.errors = {};
    },
  },
});

export const { setField, setPaymentMethod, setErrors, clearErrors } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
